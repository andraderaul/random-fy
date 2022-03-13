import html2canvas from 'html2canvas'

type UseComponentToImage = {
  fileName: string
  elementName: string
}

export const onClone = (document: Document) => {
  const button = document.getElementById('download')
  const subtitle = document.getElementById('subtitle')

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
  elementName
}: UseComponentToImage) => {
  const downloadImage = () => {
    const domElement = document.getElementById(elementName)

    if (!domElement) return

    html2canvas(domElement, {
      onclone: onClone
    }).then((canvas) => canvasCallback(canvas, fileName))
  }

  return {
    downloadImage
  }
}
