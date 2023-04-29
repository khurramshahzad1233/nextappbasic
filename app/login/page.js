import React,{Fragment} from 'react';
import { Logincomponent } from '@/components/clientcomponents';

const page = () => {

    
  return (
    <Fragment>
      <Logincomponent/>
    </Fragment>
    
  )
};

export const metadata={
  title: "login",
  description: "this is a small project"
}



export default page