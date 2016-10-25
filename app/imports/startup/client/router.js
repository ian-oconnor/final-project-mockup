import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/Meeting', {
  name: 'Add_Meeting_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Meeting_Page' });
  },
});

FlowRouter.route('/Calender', {
  name: 'Calender_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calender_Page' });
  },
});

FlowRouter.route('/Leaderboard', {
  name: 'Leaderboard_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Leaderboard_Page' });
  },
});

FlowRouter.route('/Profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
},
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
