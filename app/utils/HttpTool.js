/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */


let baseURL = '';
if (__DEV__) {
   // 测试接口
   baseURL = 'https://xddedu.handforture.com/siservices/';
} else {
   // 正式接口
   baseURL = 'https://www.ddldedu.com/siservices/';
}

let timer = null;

const MethodType = {
   GET: 'GET',
   POST: 'POST'
};
const headers = {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
};
const appendURL = (url, params)=>{
   // Object.keys(params): 返回对象中存着所有此对象的key的数组
   if (!params || Object.keys(params).length === 0) {
      return url;
   }

   let keyValueArray = [];
   let _url = url;
   // 获取key+key对应value; 'key0=value0&key1=value1'
   Object.keys(params).forEach((key)=>{
      keyValueArray.push(`${key}=${encodeURIComponent(params[key])}`);
   });

   // 判断地址是否已经拼接了 ？,当没有的时候，使用 ？拼接第一个参数;
   // 如果有参数拼接，则用&符号拼接后边的参数
   if (url.search(/\?/) === -1) { // 转义符
      // 不存在;
      // join()把数组中的所有元素通过指定的分隔符进行分隔并组合成一个字符串。
      _url = _url + '?' + keyValueArray.join('&');
   } else {
      _url = _url + keyValueArray.join('&');
   }

   return _url;
};


class HttpTool {

   static post(url: string, params: any = {}, timeout: number = 30) {
      return fetchRequest(MethodType.POST, url, params, timeout);
   }

   static get(url: string, params: any = {}, timeout: number = 30) {
      return fetchRequest(MethodType.GET, url, params, timeout);
   }
}


function fetchRequest(method: string, url, params, timeout) {
   // fetch(url, options)

   let options = {
      method: method,
      header: headers
   };

   let _url = baseURL + url;

   if (method === MethodType.GET) {
      _url = appendURL(_url, params);
   }

   if (method === MethodType.POST) {
      // 设置表单
      let formData = new FormData();

      Object.keys(params).forEach((key)=>{
         formData.append(key, params[key]);
      });

      formData.append('token', SDeviceInfo.deviceToken);
      formData.append('userId', );

      // 合成完整options
      options = {
         ...options,
         body: formData
      }
   }

   return timeoutFetch(fetch(_url, options), timeout)
      .then(resp=>{
         timer && clearTimeout(timer);

         if (resp.ok) {
            return resp.json;
         }
         // 错误提示


      }).then((response)=>{
         timer && clearTimeout(timer);

         if (response.error === 0) {
             return response;
         } else {
            // 错误提示

         }

      }).catch((error)=>{
         timer && clearTimeout(timer);

         // 错误提示

      }).finally(()=>{
         timer && clearTimeout(timer);
      })
}

function timeoutFetch(promise, timeout = 30) {
   // .race: Promise.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态. 所以超过timeout时长就说明请求超时

   let timeoutBlock = ()=>{};

   let timeout_promise = new Promise((resolve, reject)=>{
      timeoutBlock = ()=> {
         timer && clearTimeout(timer);
         reject('请求超时');
      }
   });

   let result_promise = new Promise.race([promise, timeout_promise]);

   // setTimeout(): n秒后弹出执行回调函数中的代码
   // setInterval(): 会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭,时间参数: 间隔n秒后 执行回调函数中的代码(循环)
   timer = setTimeout(()=>{
      // 30s后执行
      timeoutBlock();
   }, timeout * 1000);

   return result_promise;
}


export default HttpTool;

