import ContentServer from "../api/contentServer"
import { transform } from "../api/helpers"

const contentServerUri = process.env.CONTENT_SERVER_URI
const assetServerUri = process.env.ASSET_SERVER_URI
const staticServerUri = process.env.STATIC_SERVER_URI


let gameClient
let onReadyCallback

const finishChallenge = (score) => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      score,
      id: "finish"
    }, gameClient.origin)
}

const showTimeline = (startTime) => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      startTime,
      id: "showTimeline"
    }, gameClient.origin)
}

const startTimelineClock = () => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      id: "startTimelineClock"
    }, gameClient.origin)
}

const stopTimelineClock = () => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      id: "stopTimelineClock"
    }, gameClient.origin)
}

const hideTimeline = () => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      id: "hideTimeline"
    }, gameClient.origin)
}

function receiveMessage(event) {
  const data = event.data
  if (data.type !== "challengeData") {
    return
  }

  console.log(event)

  gameClient = { source: event.source, origin: event.origin }

  console.log(data.data)

  onReadyCallback(data.data, { callbacks: {
    finishChallenge,
    showTimeline,
    startTimelineClock,
    stopTimelineClock,
    hideTimeline
  } })
}

export default function bootstrap(onReady) {
  onReadyCallback = onReady

  try {
    console.assert(window.parent.origin)

    // We are in the same window

    const url = new URL(window.location)

    const challengeNumber = url.searchParams.get("challengeNumber")
    const challengeType = url.searchParams.get("challengeType")



    if (!challengeNumber || !challengeType) {
      console.error(`Missing query parameters:
        challengeNumber=${challengeNumber},
        challengeType=${challengeType}`
      )
    } else {
      if (!contentServerUri || !assetServerUri || !staticServerUri) {
        console.error(`Missing config parameters:
          contentServerUri=${contentServerUri},
          assetServerUri=${assetServerUri},
          staticServerUri=${staticServerUri}`
        )
      } else {
        const contentServer = new ContentServer(contentServerUri)
        contentServer.getData()
          .then((data) => {
            const content = selectContent(transform(data), challengeType, challengeNumber)
            console.log(content)
            onReadyCallback(content, { callbacks: {
              finishChallenge: score => { console.log(`finishChallenge, score: ${score}`) },
              showTimeline: startTime => { console.log(`showTimeline, startTime: ${startTime}`) },
              startTimelineClock: () => { console.log("startTimelineClock") },
              stopTimelineClock: () => { console.log("stopTimelineClock") },
              hideTimeline: () => { console.log("hideTimeline") },
            } })
          })
      }
    }
  } catch (e) {
    // We are in another window (iframe)
    window.addEventListener("message", receiveMessage, false)
  }
}

function selectContent(data, challengeType, challengeNumber) {
  const station = data.challenges[challengeNumber]
  const challenge = data.challenges[challengeNumber].challengeTypes[challengeType]

  return {
    color: station.color,
    shared: data.shared,
    challenge,
    staticServerUri
  }
}
