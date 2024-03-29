import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import route from "ziggy-js"

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="{{ url('/') }}">
          Bookmark
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route("bookmark.index").url()}
              >
                Bookmarks
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route("bookmark.add").url()}
              >
                Bookmark Add
              </InertiaLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
