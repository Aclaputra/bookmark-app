import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import Menu from "../../../components/common/nav"

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
    <React.Fragment>
      <div className="mb-3">
        <Menu />
      </div>
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
    </React.Fragment>
  )
}

export default BookmarkAddPage
