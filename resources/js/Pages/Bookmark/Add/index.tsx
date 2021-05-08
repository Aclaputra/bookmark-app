import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"

const BookmarkAddPage: React.FC = () => {
  const [state, setstate] = useState({
    link: "",
    title: "some hardcoded title",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post("/bookmark/preview", state)
  }
  return (
    <div className="row">
      <div className="col-sm-8 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              className="form-control"
              name="link"
              value={state.link}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookmarkAddPage
