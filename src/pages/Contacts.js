import React from 'react';
import ContactsHeader from '../components/Page_Contacts/ContactsHeader/ContactsHeader';
import ContactsMain from '../components/Page_Contacts/ContactsMain/ContactsMain';
import Subscription from '../components/Subscription/Subscription';


export default function Contacts() {
  return (
    <div className="contacts">
      <ContactsHeader />
      <ContactsMain />
      <Subscription />
    </div>
  );
}



