### React-Router

使用**hashHistory**则url中会出现#号，使用**browserHistory**就可以解决；在react-router4中分别为HashRouter、BrowserRouter。

```jsx
import { HashRouter, BrowserRouter } from 'react-router-dom';
```

实际使用时，在Github gh-pages中发现，Github服务器对支持react-router的BrowserRouter有问题，改为HashRouter后一切正常。

