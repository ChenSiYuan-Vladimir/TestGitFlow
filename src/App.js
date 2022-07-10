import React,{useEffect,useCallback} from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { petAction, petDao } from './testApp/dao/index';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import {TestApp} from './testApp/index'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
.init({
  resources:{
    en:{
      translation:{
        'welcome to React':"well"
      }
    },
    zh:{
      translation:{
        'welcome to React':"well2"
      }
    }
  },
  lng:'en',
  fallbackLng:'en',

  interpolation:{
    escapeValue:false
  }
})

function App() {
  const dispatch = useDispatch();
  // useSelector 是 react-redux 提供的一种hooks，这个Selector机理中能够自动处理筛选问题。
  const data = useSelector((state) => state.pet.name);

  const {t} = useTranslation()

  const hubspotForm = useCallback(() => {
    const srcUrl = "https://js.hsforms.net/forms/v2.js"
    const next_Script = document.createElement('script')
    const addScript = (src) => {
      next_Script.setAttribute('src', src);
      next_Script.setAttribute('charSet', 'utf-8');
      next_Script.setAttribute('type', 'text/javascript');
      next_Script.onload = () => {
        //@ts-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22114441",
          formId: "1efc9a0c-00ef-40b1-ba3b-43efcb0f94ab",
          target: "#form",
        });
      }
      document.body.append(next_Script);
      next_Script.remove()
    }
    addScript(srcUrl)
  },[])

  useEffect(() => {
    // resolve Nextjs Script Tag not loading amplitude
    hubspotForm()
  },[hubspotForm])

  const handleFetch = () => {
    petDao.getPet().then((res) => {
      // 这里将获取到的res 通过dispatch去传递到action去。接着reducer会监听action的触发，做出对应操作。
      dispatch(petAction.syncPets(res.data.data));
    })
  }

  // const handleAdd = () => {
  //   petDao.addPet().then((res) => {
  //     dispatch(petAction.syncPets(res.data.data))
  //   })
  // }

  const script = () => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "x8vxzxix"
    };

    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/x8vxzxix';
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
      console.log("sss")
    })();
  }

  

  const handleModify = () => {
    petDao.modifyPet().then((res) => {
      dispatch(petAction.modifyPet(res.data.data))
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t('welcome to React')}</h2>
        <button onClick={handleFetch}>fetch</button>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleModify}>modify</button>
        {script()}
        <div>
      <div id='form' style={{width:500,margin:"auto"}}></div>

    </div>
      </header>
    </div>
  );
}

export default App;
