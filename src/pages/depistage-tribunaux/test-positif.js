import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const PositiveTest = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>Have you tested positive for COVID-19 in the past 14 days?</h2>
  </QuestionTemplate>
)

export default PositiveTest