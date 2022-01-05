import React from "react";
import "./App.scss";
import {Header} from "./components/Header";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ErrorsInfoSection} from "./components/ErrorsInfoSection";
import {TabsNamesEnum} from "./types";
import {useFetchAllData} from "./hooks/useFetchAllData";
import AnalyticsData from "./components/CardData/CardData";

const tabProps = {
  className: "tab-list__item",
  selectedClassName: "tab-list__item-active",
  tabIndex: "0",
};

function App() {
  useFetchAllData()

  return (
    <div className="card">
      <Header/>
      <main>
        <Tabs>
          <nav>
            <TabList className="tab-list">
              <Tab {...tabProps}>
                Last Hour
              </Tab>
              <Tab {...tabProps}>
                Today
              </Tab>
              <Tab {...tabProps}>
                Yesterday
              </Tab>
              <Tab {...tabProps}>
                Last 3 day
              </Tab>
            </TabList>
          </nav>
          <TabPanel>
            <ErrorsInfoSection tabName={TabsNamesEnum.errors_last_hour}/>
          </TabPanel>
          <TabPanel>
            <ErrorsInfoSection tabName={TabsNamesEnum.today}/>
          </TabPanel>
          <TabPanel>
            <ErrorsInfoSection tabName={TabsNamesEnum.errors_yesterday}/>
          </TabPanel>
          <TabPanel>
            <ErrorsInfoSection tabName={TabsNamesEnum.errors_last_3_day}/>
          </TabPanel>
        </Tabs>
        <AnalyticsData/>
      </main>
    </div>
  );
}

export default App;
