import React from "react"

interface Props {}

const BookmarkAddPage: React.FC<Props> = () => {
  return (
    <div className="row">
      <div className="col-sm-8 mx-auto">
        <form action="">
          <div className="form-group">
            <label htmlFor="Link"></label>
            <input type="text" className="form-control" name="link" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookmarkAddPage
