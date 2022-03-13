import { renderHook } from '@testing-library/react-hooks'
import html2canvas from 'html2canvas'
import {
  useComponentToImage,
  canvasCallback,
  onClone
} from './use-component-to-image'

jest.mock('html2canvas', () => jest.fn())

describe('useComponentToImage', () => {
  it("should be able return undefined if there isn't document element", async () => {
    const props = {
      elementName: 'elementName',
      fileName: 'fileName'
    }

    const { result, waitFor } = renderHook(() => useComponentToImage(props))
    await waitFor(() => result.current.downloadImage())

    expect(result.current.downloadImage()).toBeUndefined()
  })

  it('should be able to download image', async () => {
    const domElement = 'domElement'
    document.getElementById = jest.fn().mockReturnValueOnce(domElement)

    const props = {
      elementName: 'elementName',
      fileName: 'fileName'
    }

    const { result, waitFor } = renderHook(() => useComponentToImage(props))
    await waitFor(() => result.current.downloadImage())

    expect(html2canvas).toHaveBeenCalledWith(domElement, {
      onclone: expect.any(Function)
    })
  })
})

describe('onClone', () => {
  it('should be able to hide elements', () => {
    const document = {
      getElementById: jest.fn().mockReturnValue({
        style: {
          visibility: 'visible'
        }
      })
    } as unknown as Document

    onClone(document)

    expect(document.getElementById).toHaveBeenNthCalledWith(1, 'download')
    expect(document.getElementById).toHaveBeenNthCalledWith(2, 'subtitle')
  })

  it('shouldnt be able to hide elements', () => {
    const document = {
      getElementById: jest.fn().mockReturnValue('')
    } as unknown as Document

    onClone(document)

    expect(document.getElementById).toHaveBeenNthCalledWith(1, 'download')
    expect(document.getElementById).toHaveBeenNthCalledWith(2, 'subtitle')
  })
})
describe('canvasCallback', () => {
  it('should be able download a image', () => {
    const filename = 'test'

    const mockImage = 'image'
    const canvas = {
      toDataURL: jest.fn().mockReturnValue(mockImage)
    } as unknown as HTMLCanvasElement

    const mockA = {
      setAttribute: jest.fn(),
      click: jest.fn()
    }

    document.createElement = jest.fn().mockReturnValue(mockA)

    canvasCallback(canvas, filename)

    expect(canvas.toDataURL).toHaveBeenCalled()
    expect(mockA.setAttribute).toHaveBeenNthCalledWith(1, 'download', filename)
    expect(mockA.setAttribute).toHaveBeenNthCalledWith(2, 'href', mockImage)
    expect(mockA.click).toHaveBeenCalledTimes(1)
  })
})
