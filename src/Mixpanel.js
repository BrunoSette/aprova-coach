import mixpanel from 'mixpanel-browser';
mixpanel.init('ed2e51f63610f4376ac1cb3aa056995d');

let actions = {
  identify: id => {
    mixpanel.identify(id);
  },
  alias: id => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  people: {
    set: props => {
      mixpanel.people.set(props);
    }
  }
};

export let Mixpanel = actions;
