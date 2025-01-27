import * as exec from '@actions/exec'
import * as tc from '@actions/tool-cache'

const ebctlVersion = 'v0.4.0'

export type UploadSBOMParams = {
  sbomPath: string
  edgebitUrl: string
  edgebitToken: string
  imageID?: string
  imageTag?: string
  sourceRepoUrl: string
  sourceCommitId: string
  baseCommitId?: string
}

export type UploadSBOMResult = {
  commentBody: string
}

export async function uploadSBOM(params: UploadSBOMParams): Promise<UploadSBOMResult> {
  const ebctl = await getCLI()

  const args = ['upload-sbom-for-ci']

  if (params.imageID) {
    args.push('--image-id', params.imageID)
  }

  if (params.imageTag) {
    args.push('--image-tag', params.imageTag)
  }

  args.push('--repo', params.sourceRepoUrl)
  args.push('--commit', params.sourceCommitId)

  if (params.baseCommitId) {
    args.push('--base-commit', params.baseCommitId)
  }

  args.push(params.sbomPath)

  const output = await exec.getExecOutput(ebctl, args, {
    env: {
      EDGEBIT_URL: params.edgebitUrl,
      EDGEBIT_API_KEY: params.edgebitToken,
    },
  })

  if (output.exitCode !== 0) {
    throw new Error(`Failed to upload SBOM: ${output.stderr}`)
  }

  const outputObj = JSON.parse(output.stdout)

  return {
    commentBody: outputObj['comment_body'],
  }
}

export async function getCLI(): Promise<string> {
  const archVal = process.arch === 'x64' ? 'x86_64' : 'arm64'
  const toolURL = `https://github.com/edgebitio/edgebit-cli/releases/download/${ebctlVersion}/edgebit-cli_Linux_${archVal}.tar.gz`
  const downloaded = await tc.downloadTool(toolURL)
  const extracted = await tc.extractTar(downloaded)

  return `${extracted}/ebctl`
}
