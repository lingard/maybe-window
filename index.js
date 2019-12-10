// @flow

import Maybe from 'data.maybe'

// eslint-disable-next-line flowtype/no-weak-types
type Window = any

export const getWindow = (): Maybe<Window> => {
  if (typeof window === 'undefined') {
    return Maybe.Nothing()
  }

  return Maybe.fromNullable(window)
}

export const getDocument = (): Maybe<Document> =>
  getWindow().chain(window => Maybe.fromNullable(window.document))

export const getBody = (): Maybe<HTMLBodyElement> =>
  getDocument()
    .chain(document => Maybe.fromNullable(document.body))

export const getDocumentElement = () =>
  getDocument()
    .chain<HTMLElement>((document: Document) =>
      Maybe.fromNullable(document.documentElement)
    )

export const getWindowHeight = () =>
  getWindow()
    .map(window => window.innerHeight)
    .orElse(
      () =>
        getDocumentElement()
          .map(documentElement =>
            documentElement.clientHeight
          )
    )
    .getOrElse(0)

export const getScrollY = () =>
  Math.max(
    getWindow()
      .map(window => window.pageYOffset)
      .getOrElse(0),
    getDocumentElement()
      .map(element => element.scrollTop)
      .getOrElse(0),
    getBody()
      .map(body => body.scrollTop)
      .getOrElse(0),
  )


