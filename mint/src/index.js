import Header from '../packages/header';
import Button from '../packages/button';
import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Field from '../packages/field';
import Badge from '../packages/badge';
import Switch from '../packages/switch';
import Spinner from '../packages/spinner';
import Navbar from '../packages/navbar';
import Tabbar from '../packages/tabbar';
import Search from '../packages/search';
import Checklist from '../packages/checklist';
import RadioGroup from '../packages/radio-group';
import Radio from '../packages/radio';
import Loadmore from '../packages/loadmore';
import Actionsheet from '../packages/actionsheet';
import Popup from '../packages/popup';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Range from '../packages/range';
import Picker from '../packages/picker';
import Progress from '../packages/progress';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator';
import MessageBox from '../packages/message-box';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import DatetimePicker from '../packages/datetime-picker';
import IndexList from '../packages/index-list';
import IndexSection from '../packages/index-section';
import Countdown from '../packages/countdown';
import Tab from '../packages/tab';
import TabItem from '../packages/tab-item';
import Step from '../packages/step';
import StepItem from '../packages/step-item';
import Upload from '../packages/upload';
import Preview from '../packages/preview';
import '../src/assets/font/iconfont.css';
import merge from './utils/merge';

const version = '2.2.6';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Field.name, Field);
  Vue.component(Badge.name, Badge);
  Vue.component(Switch.name, Switch);
  Vue.component(Spinner.name, Spinner);
  Vue.component(Navbar.name, Navbar);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(Search.name, Search);
  Vue.component(Checklist.name, Checklist);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(Radio.name, Radio);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Popup.name, Popup);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Range.name, Range);
  Vue.component(Picker.name, Picker);
  Vue.component(Progress.name, Progress);
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(Countdown.name, Countdown);
  Vue.component(Tab.name, Tab);
  Vue.component(TabItem.name, TabItem);
  Vue.component(Step.name, Step);
  Vue.component(StepItem.name, StepItem);
  Vue.component(Upload.name, Upload);
  Vue.component(Preview.name, Preview);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version,
  Header,
  Button,
  Cell,
  CellSwipe,
  Field,
  Badge,
  Switch,
  Spinner,
  Navbar,
  Tabbar,
  Search,
  Checklist,
  RadioGroup,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Progress,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  Countdown,
  Tab,
  TabItem,
  Step,
  StepItem,
  Upload,
  Preview
};
