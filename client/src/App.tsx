import React from "react";
import "./App.scss";
import {Header} from "./components/Header";
import {useFetchAllData} from "./hooks/useFetchAllData";
import {connect} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {rootState} from "./store";
import {Spinner} from "./components/Spinner";
import {ErrorsTabList} from "./components/ErrorsTabList";
import {CardData} from "./components/CardData";

function App() {
  useFetchAllData()
  const {pending} = useTypedSelector(rootState)
  return (
    <div className="card">
      <Header/>
      <main>
        {pending
          ? <Spinner/>
          : (
            <>
              <ErrorsTabList/>
              <CardData/>
            </>
          )
        }
      </main>
    </div>
  );
}

export default connect(rootState)(App);
