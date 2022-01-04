import React, {FC, useEffect} from 'react';
import {TabsNamesEnum} from "../../types";
import {ErrorsAveragePanel} from "../ErrorsAveragePanel";
import {ErrorsInfoBar} from "../ErrorsInfoBar";

const CartContent: FC<{tabName: TabsNamesEnum}> = ({tabName}) => {

  useEffect(() => {

  })

  return (
    <div>
      <ErrorsAveragePanel/>
      <ErrorsInfoBar/>
    </div>
  );
};

export default CartContent;