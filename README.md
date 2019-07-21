# 碳素云公有数据服务
## 通过名称模糊查询获取地点信息
```typescript
import Service,{GPS,Company} from '@ctsy/data-service'
const service = new Service("accessToken","secertToken")
(async ()=>{
    let rs0 = await service.GPS.byName("碳素云")
    /**
     * [
		{
			"acc_flag": 0,
			"addr": "四川省绵阳市涪城区青义镇青龙大道59号西南科技大学国家大学科技园B548",
			"address_norm": "[四川省(510000)|PROV|1|][绵阳市(510700)|CITY|1|][涪城区(510703)|AREA|1|][二环路北段()|ROAD|0|]青义镇青龙大道59号[西南科技大学国家大学科技园(11224707481802086529)|POI_PARENT|1|B548$]",
			"admin_info": {
				"area_id": 510703,
				"area_name": "涪城区",
				"city_id": 510700,
				"city_name": "绵阳市"
			},
			"alias": [
				"碳素云"
			],
			"aoi": "青义",
			"area": 8279,
			"area_name": "绵阳市涪城区",
			"biz_type": 0,
			"catalogID": 0,
			"cla": [],
			"click_flag": 0,
			"detail": 1,
			"diPointX": 1165629587,
			"diPointY": 368020308,
			"di_tag": "公司企业",
			"dis": -1,
			"dist2route": 0,
			"dist2start": 0,
			"ext": {
				"detail_info": {
					"areaid": "8279",
					"display_info_comment_label": {
						"hotel": "",
						"life": ""
					},
					"display_info_redu": "0",
					"from_pds": "1",
					"image": "http://hiphotos.baidu.com/space/pic/item/d52a2834349b033bb390accd1dce36d3d539bd89.jpg",
					"link": [],
					"mbc": {
						"markv": "3"
					},
					"name": "绵阳市碳素云信息技术有限责任公司",
					"overall_rating": "",
					"phone": "(0816)2353316,18990191742",
					"phone_risk": {
						"bid": "7210416731289924214",
						"word": "如遇电话错误，可点击“报错”进行反馈"
					},
					"poi_address": "四川省绵阳市涪城区青义镇青龙大道59号西南科技大学国家大学科技园B548",
					"point": {
						"x": 11656295.87,
						"y": 3680203.08
					},
					"price": "",
					"shop_hours_flag": "",
					"std_tag": "公司企业;公司",
					"tag": "公司",
					"validate": 0,
					"vs_content": {
						"invisible": {
							"bigdata": {
								"showtag": "[[\"\\u516c\\u53f8\"], [\"\"], \"\", 0, \"\"]"
							}
						}
					}
				},
				"src_name": "enterprise"
			},
			"ext_display": {
				"display_info": {
					"impression_tag": {
						"hotel": "",
						"life": ""
					},
					"redu": "0",
					"source_map": [],
					"src_name": "display_info",
					"uids": [
						"7210416731289924214:redu",
						"7210416731289924214:webmining"
					]
				}
			},
			"ext_type": 4,
			"f_flag": 2073,
			"father_son": 0,
			"flag_type": "512",
			"geo": ".=TiheFBUt47VA;",
			"geo_type": 2,
			"name": "绵阳市碳素云信息技术有限责任公司",
			"navi_update_time": 1563135464,
			"navi_x": "0",
			"navi_y": "0",
			"new_catalog_id": "140000",
			"poiType": 0,
			"poi_click_num": 0,
			"poi_profile": 0,
			"primary_uid": "7210416731289924214",
			"prio_flag": 32,
			"route_flag": 0,
			"show_tag": [],
			"status": 1,
			"std_tag": "公司企业;公司",
			"std_tag_id": "2502",
			"storage_src": "api",
			"tag": "<font color=\"#c60a00\">公司</font>企业",
			"tel": "(0816)2353316,18990191742",
			"ty": 2,
			"uid": "cfa581ada7919c81d13ce320",
			"view_type": 0,
			"x": 1165629587,
			"y": 368020308
		}
	]
     * */
    let rs1 = await service.Company.search("碳素云")
    /**
     * [
		{
			"pid": "xlTM-TogKuTwq012ppM3hHJjhJ4BpjVQbQmd",
			"resultStr": "绵阳市碳素云信息技术有限责任公司",
			"resultType": 0
		}
	]
     * */
    let rs2 = await service.Company.info("xlTM-TogKuTwq012ppM3hHJjhJ4BpjVQbQmd")
    /**
     * {
		"RegistID": "915107033094969216",
		"UnitID": "30949692-1",
		"TaxID": "915107033094969216",
		"Person": "鄢鹏权",
		"Status": "开业",
		"Start": "2014-06-23",
		"End": "2014-06-23 至 无固定期限",
		"Judage": "2019-04-09",
		"Money": "3万(元)",
		"Type": "有限责任公司(自然人投资或控股)",
		"UnitType": "企业法人",
		"Industry": "科技推广和应用服务业",
		"Area": "四川省",
		"Phone": "189****1742",
		"Registration": "绵阳市工商行政管理局",
		"Address": "四川省绵阳市经开区贾家店街89号（托管企业）",
		"Range": "软件开发、销售及平面设计；系统集成；硬件及耗材的租赁、销售；网络技术咨询服务；信息化平台销售及提供相关方案和服务。(依法须经批准的项目，经相关部门批准后方可开展经营活动)"
	}
     * */
})()
```