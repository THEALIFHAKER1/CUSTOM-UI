import React from "react"

import DialogDrawerPage from "./components/DialogDrawer/DialogDrawerPage"
import TemplatePage from "./components/Template/Template"

export default function MainPage() {
  return (
    <div>
      <DialogDrawerPage />
      <TemplatePage />
    </div>
  )
}
