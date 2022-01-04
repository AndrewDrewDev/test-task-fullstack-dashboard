import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { CartContent } from "./components/CartContent";
import { TabsNamesEnum } from "./types";
import {useFetchAllData} from "./hooks/useFetchAllData";

const tabProps = {
  className: "tab-list__item",
  selectedClassName: "tab-list__item-active",
  tabIndex: "0",
};

function App() {
  useFetchAllData()

  return (
    <div className="card">
      <Header />
      <main>
        <Tabs>
          <nav>
            <TabList className="tab-list">
              <Tab {...tabProps}>Last hour</Tab>
              <Tab {...tabProps}>Today</Tab>
              <Tab {...tabProps}>Yesterday</Tab>
              <Tab {...tabProps}>Last 3 day</Tab>
            </TabList>
          </nav>
          <TabPanel className="">
            <CartContent tabName={TabsNamesEnum.errors_last_hour} />
          </TabPanel>
          <TabPanel>
            <CartContent tabName={TabsNamesEnum.today} />
          </TabPanel>
          <TabPanel>
            <CartContent tabName={TabsNamesEnum.errors_yesterday} />
          </TabPanel>
          <TabPanel>
            <CartContent tabName={TabsNamesEnum.errors_last_3_day} />
          </TabPanel>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
