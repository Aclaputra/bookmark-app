import React from "react"
import Menu from "../../../../js/components/common/nav"

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <Menu />
      </div>
      <div className="row">
        <div className="col-sm-8 mx-auto">
          <ul className="list-group">
            {bookmarks.length > 0 &&
              bookmarks.map((bookmark, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <p>Title: {bookmark.title}</p>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BookmarkListPage
