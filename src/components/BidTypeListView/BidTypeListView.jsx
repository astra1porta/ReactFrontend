import React from 'react';
import { BidTypeHeaderView } from '../BidTypeHeaderView/BidTypeHeaderView';

import {BidTypeView} from '../BidTypeView/BidTypeView';

export const BidTypeListView = ({bidTypes}) => (
  <>
  <section>
    <div className='header mt-3'>
        <BidTypeHeaderView />
    </div>
  </section>
  {bidTypes.map((bidType) =>{
      return <BidTypeView key={bidType.id} bidType= {bidType} />
    })
  }
    </>
)