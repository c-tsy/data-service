import { BaseController } from '@ctsy/request';
import { GPS_ByName, CompanySearchReault, CompanyInfo } from './iface';
export class Base extends BaseController {
    ak: string = "";
    sk: string = "";
    host: string = "https://data.tansuyun.cn/"
    constructor(name: string, ak: string, sk: string) {
        super(name)
        this.ak = ak;
        this.sk = sk;
    }
    // _post(){}
}

/**
 * 地图GPS坐标查询
 */
export class GPS extends Base {
    constructor(ak: string, sk: string) {
        super('GPS', ak, sk);
    }
    /**
     * 通过名称搜索查询地图坐标
     * @param Keyword 
     */
    async byName(Keyword: string): Promise<GPS_ByName[]> {
        return await this._post('byName', { Keyword });
    }
}


/**
 * 企业信息查询
 */
export class Company extends Base {
    constructor(ak: string, sk: string) {
        super('Compnay', ak, sk);
    }
    /**
     * 模糊搜索查询企业
     * @param Keyword 
     */
    async search(Keyword: string): Promise<CompanySearchReault> {
        return await this._post('search', { Keyword });
    }
    /**
     * 查询企业详细信息
     * @param PID 
     */
    async info(PID: string): Promise<CompanyInfo> {
        return await this._post('info', { PID })
    }
}
/**
 * 最终服务类
 */
export default class Service {
    GPS: GPS;
    Company: Company
    constructor(ak: string, sk: string) {
        this.GPS = new GPS(ak, sk);
        this.Company = new Company(ak, sk);
    }
}