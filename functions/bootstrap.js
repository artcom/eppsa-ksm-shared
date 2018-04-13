
import ContentServer from "../api/contentServer"
import { transform } from "../api/helpers"

const contentServerUri = process.env.CONTENT_SERVER_URI
const assetServerUri = process.env.ASSET_SERVER_URI
const staticServerUri = process.env.STATIC_SERVER_URI


let gameClient
let onReadyCallback

const completeChallenge = (score) => {
  gameClient.source.postMessage(
    {
      source: "challenge",
      score
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

  onReadyCallback(data.data, completeChallenge)
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
      console.error(`Missing query parameters: ${challengeNumber}, ${challengeType}`)
    } else {
      if (!contentServerUri || !assetServerUri || !staticServerUri) {
        console.log(
          `Missing config parameters: ${contentServerUri}, ${assetServerUri}, ${staticServerUri}`
        )
      } else {
        const contentServer = new ContentServer(contentServerUri)
        contentServer.getData()
          .then((data) => {
            const content = selectContent(transform(data), challengeType, challengeNumber)
            console.log(content)
            onReadyCallback(content, completeChallenge)
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
