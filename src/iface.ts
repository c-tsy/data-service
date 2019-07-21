/**
 * 企业信息详情
 */
interface CompanyInfo {
    /**
     * 税号
     */
    TaxID: string;
    /**
     * 审核/年检时间
     */
    Judage: string;
    /**
     * 所属行业
     */
    Industry: string;
    /**
     * 行政区划
     */
    Area: string;
    /**
     * 电话
     */
    Phone: string;
    /**
     * 登记机关
     */
    Registration: string;
    /**
     * 经营地址
     */
    Address: string;
    /**
     * 经营范围
     */
    Range: string;
    /**
     * 营业执照号、注册号
     */
    RegistID: string;
    /**
     * 组织结构代码
     */
    UnitID: string;
    /**
     * 法人代表
     */
    Person: string;
    /**
     * 营业状态
     */
    Status: string;
    /**
     * 营业起
     */
    Start: string;
    /**
     * 营业止
     */
    End: string;
    /**
     * 年审时间
     */
    Judge: string;
    /**
     * 注册资本
     */
    Money: string;
    /**
     * 企业类型
     */
    Type: string;
    /**
     * 机构类型
     */
    UnitType: string;
}
/**
 * 企业信息搜索结果
 */
interface CompanySearchReault {
    /**
     * 企业PID，全局唯一
     */
    pid: string;
    /**
     * 结果字符串
     */
    resultStr: string;
    /**
     * 类型
     */
    resultType: number;
}
/**
 * GPS请求通过名称查询
 */
interface GPS_ByName {
    acc_flag: number;
    addr: string;
    address_norm: string;
    admin_info: Admininfo;
    alias: string[];
    aoi: string;
    area: number;
    area_name: string;
    biz_type: number;
    catalogID: number;
    cla: any[];
    click_flag: number;
    detail: number;
    diPointX: number;
    diPointY: number;
    di_tag: string;
    dis: number;
    dist2route: number;
    dist2start: number;
    ext: Ext;
    ext_display: Extdisplay;
    ext_type: number;
    f_flag: number;
    father_son: number;
    flag_type: string;
    geo: string;
    geo_type: number;
    name: string;
    navi_update_time: number;
    navi_x: string;
    navi_y: string;
    new_catalog_id: string;
    poiType: number;
    poi_click_num: number;
    poi_profile: number;
    primary_uid: string;
    prio_flag: number;
    route_flag: number;
    show_tag: any[];
    status: number;
    std_tag: string;
    std_tag_id: string;
    storage_src: string;
    tag: string;
    tel: string;
    ty: number;
    uid: string;
    view_type: number;
    x: number;
    y: number;
}

interface Extdisplay {
    display_info: Displayinfo;
}

interface Displayinfo {
    impression_tag: Displayinfocommentlabel;
    redu: string;
    source_map: any[];
    src_name: string;
    uids: string[];
}

interface Ext {
    detail_info: Detailinfo;
    src_name: string;
}

interface Detailinfo {
    areaid: string;
    display_info_comment_label: Displayinfocommentlabel;
    display_info_redu: string;
    from_pds: string;
    image: string;
    link: any[];
    mbc: Mbc;
    name: string;
    overall_rating: string;
    phone: string;
    phone_risk: Phonerisk;
    poi_address: string;
    point: Point;
    price: string;
    shop_hours_flag: string;
    std_tag: string;
    tag: string;
    validate: number;
    vs_content: Vscontent;
}

interface Vscontent {
    invisible: Invisible;
}

interface Invisible {
    bigdata: Bigdata;
}

interface Bigdata {
    showtag: string;
}

interface Point {
    x: number;
    y: number;
}

interface Phonerisk {
    bid: string;
    word: string;
}

interface Mbc {
    markv: string;
}

interface Displayinfocommentlabel {
    hotel: string;
    life: string;
}

interface Admininfo {
    area_id: number;
    area_name: string;
    city_id: number;
    city_name: string;
}