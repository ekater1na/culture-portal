import React from "react"
import Layout from "../components/base/Layout"
import WorklogTable from "../components/WorklogTable/WorklogTable"
import SelfEvaluation from "../components/SelfEvaluation/SelfEvaluation"
import Difficulties from "../components/Difficulties/Difficulties"
import Header from "../components/base/Header"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()
  return (
    <main className="app">
      <Header/>
      <Layout>
        <div className="worlklog-page">
          <h1 className="page-title">{t("menu.worklog")}</h1>
          <WorklogTable/>
          <Difficulties/>
          <SelfEvaluation/>
        </div>
      </Layout>
    </main>
  )
}
