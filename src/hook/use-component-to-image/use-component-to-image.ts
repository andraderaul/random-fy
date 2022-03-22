import html2canvas from 'html2canvas'

type UseComponentToImage = {
  fileName: string
  elementName: string
  button?: string
  subtitle?: string
}

export const onClone = (
  document: Document,
  buttonName = 'download',
  subtitleText = 'subtitle'
) => {
  const button = document.getElementById(buttonName)
  const subtitle = document.getElementById(subtitleText)

  if (button && subtitle) {
    button.style.visibility = 'hidden'
    subtitle.style.visibility = 'hidden'
  }
}

export const canvasCallback = (canvas: HTMLCanvasElement, fileName: string) => {
  const image = canvas.toDataURL('png')
  const a = document.createElement('a')
  a.setAttribute('download', fileName)
  a.setAttribute('href', image)
  a.click()
}

export const useComponentToImage = ({
  fileName,
  elementName,
  button,
  subtitle
}: UseComponentToImage) => {
  const downloadImage = () => {
    const domElement = document.getElementById(elementName)

    if (!domElement) return

    html2canvas(domElement, {
      onclone: (document) => onClone(document, button, subtitle)
    }).then((canvas) => canvasCallback(canvas, fileName))
  }

  return {
    downloadImage
  }
}
