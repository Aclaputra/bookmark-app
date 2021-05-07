import React from "react"

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => {
  return (
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
  )
}

export default BookmarkListPage
