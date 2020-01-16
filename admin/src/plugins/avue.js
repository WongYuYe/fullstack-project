import Vue from 'vue'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

Vue.use(Avue, {
  ali: {
    region: 'oss-cn-beijing',
    endpoint: 'oss-cn-beijing.aliyuncs.com',
    stsToken:'',
    accessKeyId: 'LTAI4FiHms9nW7LEte8nkegx',
    accessKeySecret: 'Gtt8pQLLtT0AknhBhjOTvtv8MRdZNo',
    bucket: 'wyy-fullstack',
  }
});
