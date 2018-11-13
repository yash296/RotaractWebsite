import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MeetingAndInfo from './aboutOurClub/meetingAndInfo';
import History from './aboutOurClub/history';
import Downloads from './aboutOurClub/downloads';
import Directory from './aboutOurClub/directory';
import Contacts from './aboutOurClub/contact';
import Committee from './aboutOurClub/committees';
import ClubExec from './aboutOurClub/clubExecutives';
import Birthdays from './aboutOurClub/birthdays';

export default function() {
  return (
    <div>
      <Switch>
        <Route exact path="/MeetingAndInfo" component={MeetingAndInfo} />
        <Route exact path="/History" component={History} />
        <Route exact path="/Downloads" component={Downloads} />
        <Route exact path="/Directory" component={Directory} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/Committee" component={Committee} />
        <Route exact path="/ClubExecs" component={ClubExec} />
        <Route exact path="/Birthdays" component={Birthdays} />
      </Switch>
    </div>
  );
}
