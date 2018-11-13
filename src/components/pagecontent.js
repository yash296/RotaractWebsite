import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MeetingAndInfo from './aboutOurClub/meetingAndInfo';
import History from './aboutOurClub/history';
import Downloads from './aboutOurClub/downloads';
import Directory from './aboutOurClub/directory';
import Contacts from './aboutOurClub/contact';
import Committee from './aboutOurClub/committees';
import Birthdays from './aboutOurClub/birthdays';
import ClubExec from './aboutOurClub/clubExecutives';
import RotaryFoundation from './whatIsRotary/rotaryFoundation';
import OurCauses from './whatIsRotary/ourCauses';
import RotaryOverview from './whatIsRotary/rotaryOverview';
import RotaryCalendar from './calendar/rotaryCalendar';
import Events from './calendar/events';
import Speakers from './calendar/speakers';
import ClubNews from './newsAndUpdates/clubNews';
import PhotoAlbums from './newsAndUpdates/photoAlbums';
import Blog from './newsAndUpdates/blog';
import Rss from './newsAndUpdates/rss';
import Stories from './newsAndUpdates/stories';
import Volunteer from './getInvolved/volunteer';
import BecomeAMember from './getInvolved/becomeAMember';
import FeaturedCause from './getInvolved/featuredCause';
import ServiceProjects from './getInvolved/serviceProjects';
import Give from './getInvolved/give';
import Home from './index';

export default function() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MeetingAndInfo" component={MeetingAndInfo} />
        <Route exact path="/History" component={History} />
        <Route exact path="/Downloads" component={Downloads} />
        <Route exact path="/Directory" component={Directory} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/Committee" component={Committee} />
        <Route exact path="/ClubExecs" component={ClubExec} />
        <Route exact path="/Birthdays" component={Birthdays} />
        <Route exact path="/TheRotaryFoundation" component={RotaryFoundation} />
        <Route exact path="/OurCauses" component={OurCauses} />
        <Route exact path="/RotaryOverview" component={RotaryOverview} />
        <Route exact path="/RotaryCalendar" component={RotaryCalendar} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Speakers" component={Speakers} />
        <Route exact path="/PhotoAlbums" component={PhotoAlbums} />
        <Route exact path="/ClubNews" component={ClubNews} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Rss" component={Rss} />
        <Route exact path="/Stories" component={Stories} />
        <Route exact path="/Volunteer" component={Volunteer} />
        <Route exact path="/BecomeAMember" component={BecomeAMember} />
        <Route exact path="/FeaturedCause" component={FeaturedCause} />
        <Route exact path="/ServiceProjects" component={ServiceProjects} />
        <Route exact path="/Give" component={Give} />
      </Switch>
    </div>
  );
}
