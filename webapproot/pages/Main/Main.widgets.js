Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	svGetCustomVariables: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"logvisitors"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layer1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}]
	}],
	verretunrningusers: ["wm.Variable", {"type":"returningusers_0"}, {"onSetData":"verretunrningusersSetData"}],
	svretusers: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"getuniquevisitors"}, {"onSuccess":"svretusersSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layer1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectPID.dataValue","targetProperty":"mypid"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectCountry.dataValue","targetProperty":"mycountry"}, {}]
			}]
		}]
	}],
	svgetvisitorspercountry: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"executeAll","operation":"main","service":"getvisitorspercountry"}, {"onSuccess":"svgetvisitorspercountrySuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"afa"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectPID.dataValue","targetProperty":"mypid"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectCountry.dataValue","targetProperty":"mycountry"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varvisitorspercountry: ["wm.Variable", {"isList":true,"json":"[]","type":"visitorspercountry_0"}, {}],
	varos: ["wm.Variable", {"isList":true,"type":"os_0"}, {"onSetData":"varosSetData"}],
	svgetos: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"dontExecute","operation":"main","service":"getos"}, {"onSuccess":"svgetosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectCountry.dataValue","targetProperty":"mycountry"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycontentmodel"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svgetbrowser: ["wm.ServiceVariable", {"disabled":true,"inFlightBehavior":"dontExecute","operation":"main","service":"getbrowser"}, {"onSuccess":"svgetbrowserSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectCountry.dataValue","targetProperty":"mycountry"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varbrowser: ["wm.Variable", {"isList":true,"json":"[]","type":"browser_0"}, {"onSetData":"varbrowserSetData"}],
	vartopdownloads: ["wm.Variable", {"isList":true,"json":"[]","type":"visitlog1_0"}, {"onSetData":"vartopdownloadsSetData"}],
	svgettopdownloads: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getvisits"}, {"onSuccess":"svgettopdownloadsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"mydate"}, {}],
				wire3: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectPID.dataValue","targetProperty":"mypid"}, {}],
				wire2: ["wm.Wire", {"expression":"'download'","targetProperty":"mytype"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svgetmetadata: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getmetadata"}, {"onSuccess":"svgetmetadataSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"'metadata'","targetProperty":"mytype"}, {}],
				wire2: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectPID.dataValue","targetProperty":"mypid"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectCountry.dataValue","targetProperty":"mycountry"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectYear","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varmetadata: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"varmetadataSetData"}],
	vargetviews: ["wm.Variable", {"isList":true,"json":"[{\"owner\":\"\"}]","type":"visitlog1_0"}, {"onSetData":"vargetviewsSetData"}],
	svgetviews: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviews"}, {"onSuccess":"svgetviewsSuccess","onSuccess1":"layerMainViews","onSuccess2":"svgetviewsovertime"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostViewed","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectMonth.displayValue","targetProperty":"mymonth"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectDay.displayValue","targetProperty":"myday"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
				wire2: ["wm.Wire", {"expression":"${selectYear.dataValue}","targetProperty":"myyear"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}]
			}]
		}]
	}],
	countriesVar: ["wm.Variable", {"isList":true,"json":"[{dataValue:\"United States\"},{dataValue:\"United Kingdom\"},{dataValue:\"Afghanistan\"},{dataValue:\"Albania\"},{dataValue:\"Algeria\"},{dataValue:\"American Samoa\"},{dataValue:\"Andorra\"},{dataValue:\"Angola\"},{dataValue:\"Anguilla\"},{dataValue:\"Antarctica\"},{dataValue:\"Antigua and Barbuda\"},{dataValue:\"Argentina\"},{dataValue:\"Armenia\"},{dataValue:\"Aruba\"},{dataValue:\"Australia\"},{dataValue:\"Austria\"},{dataValue:\"Azerbaijan\"},{dataValue:\"Bahamas\"},{dataValue:\"Bahrain\"},{dataValue:\"Bangladesh\"},{dataValue:\"Barbados\"},{dataValue:\"Belarus\"},{dataValue:\"Belgium\"},{dataValue:\"Belize\"},{dataValue:\"Benin\"},{dataValue:\"Bermuda\"},{dataValue:\"Bhutan\"},{dataValue:\"Bolivia\"},{dataValue:\"Bosnia and Herzegovina\"},{dataValue:\"Botswana\"},{dataValue:\"Bouvet Island\"},{dataValue:\"Brazil\"},{dataValue:\"British Indian Ocean Territory\"},{dataValue:\"Brunei Darussalam\"},{dataValue:\"Bulgaria\"},{dataValue:\"Burkina Faso\"},{dataValue:\"Burundi\"},{dataValue:\"Cambodia\"},{dataValue:\"Cameroon\"},{dataValue:\"Canada\"},{dataValue:\"Cape Verde\"},{dataValue:\"Cayman Islands\"},{dataValue:\"Central African Republic\"},{dataValue:\"Chad\"},{dataValue:\"Chile\"},{dataValue:\"China\"},{dataValue:\"Christmas Island\"},{dataValue:\"Cocos (Keeling) Islands\"},{dataValue:\"Colombia\"},{dataValue:\"Comoros\"},{dataValue:\"Congo\"},{dataValue:\"Congo, The Democratic Republic of The\"},{dataValue:\"Cook Islands\"},{dataValue:\"Costa Rica\"},{dataValue:\"Cote D'ivoire\"},{dataValue:\"Croatia\"},{dataValue:\"Cuba\"},{dataValue:\"Cyprus\"},{dataValue:\"Czech Republic\"},{dataValue:\"Denmark\"},{dataValue:\"Djibouti\"},{dataValue:\"Dominica\"},{dataValue:\"Dominican Republic\"},{dataValue:\"Ecuador\"},{dataValue:\"Egypt\"},{dataValue:\"El Salvador\"},{dataValue:\"Equatorial Guinea\"},{dataValue:\"Eritrea\"},{dataValue:\"Estonia\"},{dataValue:\"Ethiopia\"},{dataValue:\"Falkland Islands (Malvinas)\"},{dataValue:\"Faroe Islands\"},{dataValue:\"Fiji\"},{dataValue:\"Finland\"},{dataValue:\"France\"},{dataValue:\"French Guiana\"},{dataValue:\"French Polynesia\"},{dataValue:\"French Southern Territories\"},{dataValue:\"Gabon\"},{dataValue:\"Gambia\"},{dataValue:\"Georgia\"},{dataValue:\"Germany\"},{dataValue:\"Ghana\"},{dataValue:\"Gibraltar\"},{dataValue:\"Greece\"},{dataValue:\"Greenland\"},{dataValue:\"Grenada\"},{dataValue:\"Guadeloupe\"},{dataValue:\"Guam\"},{dataValue:\"Guatemala\"},{dataValue:\"Guinea\"},{dataValue:\"Guinea-bissau\"},{dataValue:\"Guyana\"},{dataValue:\"Haiti\"},{dataValue:\"Heard Island and Mcdonald Islands\"},{dataValue:\"Holy See (Vatican City State)\"},{dataValue:\"Honduras\"},{dataValue:\"Hong Kong\"},{dataValue:\"Hungary\"},{dataValue:\"Iceland\"},{dataValue:\"India\"},{dataValue:\"Indonesia\"},{dataValue:\"Iran, Islamic Republic of\"},{dataValue:\"Iraq\"},{dataValue:\"Ireland\"},{dataValue:\"Israel\"},{dataValue:\"Italy\"},{dataValue:\"Jamaica\"},{dataValue:\"Japan\"},{dataValue:\"Jordan\"},{dataValue:\"Kazakhstan\"},{dataValue:\"Kenya\"},{dataValue:\"Kiribati\"},{dataValue:\"Korea, Democratic People's Republic of\"},{dataValue:\"Korea, Republic of\"},{dataValue:\"Kuwait\"},{dataValue:\"Kyrgyzstan\"},{dataValue:\"Lao People's Democratic Republic\"},{dataValue:\"Latvia\"},{dataValue:\"Lebanon\"},{dataValue:\"Lesotho\"},{dataValue:\"Liberia\"},{dataValue:\"Libyan Arab Jamahiriya\"},{dataValue:\"Liechtenstein\"},{dataValue:\"Lithuania\"},{dataValue:\"Luxembourg\"},{dataValue:\"Macao\"},{dataValue:\"Macedonia, The Former Yugoslav Republic of\"},{dataValue:\"Madagascar\"},{dataValue:\"Malawi\"},{dataValue:\"Malaysia\"},{dataValue:\"Maldives\"},{dataValue:\"Mali\"},{dataValue:\"Malta\"},{dataValue:\"Marshall Islands\"},{dataValue:\"Martinique\"},{dataValue:\"Mauritania\"},{dataValue:\"Mauritius\"},{dataValue:\"Mayotte\"},{dataValue:\"Mexico\"},{dataValue:\"Micronesia, Federated States of\"},{dataValue:\"Moldova, Republic of\"},{dataValue:\"Monaco\"},{dataValue:\"Mongolia\"},{dataValue:\"Montenegro\"},{dataValue:\"Montserrat\"},{dataValue:\"Morocco\"},{dataValue:\"Mozambique\"},{dataValue:\"Myanmar\"},{dataValue:\"Namibia\"},{dataValue:\"Nauru\"},{dataValue:\"Nepal\"},{dataValue:\"Netherlands\"},{dataValue:\"Netherlands Antilles\"},{dataValue:\"New Caledonia\"},{dataValue:\"New Zealand\"},{dataValue:\"Nicaragua\"},{dataValue:\"Niger\"},{dataValue:\"Nigeria\"},{dataValue:\"Niue\"},{dataValue:\"Norfolk Island\"},{dataValue:\"Northern Mariana Islands\"},{dataValue:\"Norway\"},{dataValue:\"Oman\"},{dataValue:\"Pakistan\"},{dataValue:\"Palau\"},{dataValue:\"Palestinian Territory, Occupied\"},{dataValue:\"Panama\"},{dataValue:\"Papua New Guinea\"},{dataValue:\"Paraguay\"},{dataValue:\"Peru\"},{dataValue:\"Philippines\"},{dataValue:\"Pitcairn\"},{dataValue:\"Poland\"},{dataValue:\"Portugal\"},{dataValue:\"Puerto Rico\"},{dataValue:\"Qatar\"},{dataValue:\"Reunion\"},{dataValue:\"Romania\"},{dataValue:\"Russian Federation\"},{dataValue:\"Rwanda\"},{dataValue:\"Saint Helena\"},{dataValue:\"Saint Kitts and Nevis\"},{dataValue:\"Saint Lucia\"},{dataValue:\"Saint Pierre and Miquelon\"},{dataValue:\"Saint Vincent and The Grenadines\"},{dataValue:\"Samoa\"},{dataValue:\"San Marino\"},{dataValue:\"Sao Tome and Principe\"},{dataValue:\"Saudi Arabia\"},{dataValue:\"Senegal\"},{dataValue:\"Serbia\"},{dataValue:\"Seychelles\"},{dataValue:\"Sierra Leone\"},{dataValue:\"Singapore\"},{dataValue:\"Slovakia\"},{dataValue:\"Slovenia\"},{dataValue:\"Solomon Islands\"},{dataValue:\"Somalia\"},{dataValue:\"South Africa\"},{dataValue:\"South Georgia and The South Sandwich Islands\"},{dataValue:\"Spain\"},{dataValue:\"Sri Lanka\"},{dataValue:\"Sudan\"},{dataValue:\"Suriname\"},{dataValue:\"Svalbard and Jan Mayen\"},{dataValue:\"Swaziland\"},{dataValue:\"Sweden\"},{dataValue:\"Switzerland\"},{dataValue:\"Syrian Arab Republic\"},{dataValue:\"Taiwan, Province of China\"},{dataValue:\"Tajikistan\"},{dataValue:\"Tanzania, United Republic of\"},{dataValue:\"Thailand\"},{dataValue:\"Timor-leste\"},{dataValue:\"Togo\"},{dataValue:\"Tokelau\"},{dataValue:\"Tonga\"},{dataValue:\"Trinidad and Tobago\"},{dataValue:\"Tunisia\"},{dataValue:\"Turkey\"},{dataValue:\"Turkmenistan\"},{dataValue:\"Turks and Caicos Islands\"},{dataValue:\"Tuvalu\"},{dataValue:\"Uganda\"},{dataValue:\"Ukraine\"},{dataValue:\"United Arab Emirates\"},{dataValue:\"United Kingdom\"},{dataValue:\"United States\"},{dataValue:\"United States Minor Outlying Islands\"},{dataValue:\"Uruguay\"},{dataValue:\"Uzbekistan\"},{dataValue:\"Vanuatu\"},{dataValue:\"Venezuela\"},{dataValue:\"Viet Nam\"},{dataValue:\"Virgin Islands, British\"},{dataValue:\"Virgin Islands, U.S.\"},{dataValue:\"Wallis and Futuna\"},{dataValue:\"Western Sahara\"},{dataValue:\"Yemen\"},{dataValue:\"Zambia\"},{dataValue:\"Zimbabwe\"}]","type":"StringData"}, {}],
	varvisitorspercountry2: ["wm.Variable", {"dataSet":"","isList":true,"json":"[]","type":"myvisiperc"}, {}],
	vargetoidasinit: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	svgetoidasinit: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getoidas"}, {"onSuccess":"svgetoidasinitSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectInstance.dataValue","targetProperty":"instanceis"}, {}]
			}]
		}]
	}],
	varuploadsperdayforchart: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	svgetviewsdetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewsdetail"}, {"onSuccess":"svgetviewsdetailSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostViewed","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vargetviewsdetail: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetviewsdetailSetData"}],
	svgetdownloaded: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloaded"}, {"onSuccess":"svgetdownloadedSuccess","onSuccess1":"svgetdownloadedovertime","onSuccess2":"layerMaingetDownloaded"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode3.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState3.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":"'download'","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectYear3.dataValue","targetProperty":"myyear"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectDay3.dataValue","targetProperty":"myday"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectMonth3.dataValue","targetProperty":"mymonth"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectOida2.dataValue","targetProperty":"mypid"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode3.dataValue","targetProperty":"myaccesscode"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectContentModel3.dataValue","targetProperty":"mycmodel"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostDownloaded2","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vargetdownloaded: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetdownloadedSetData"}],
	vargetdownloadedforchart: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	vargetviewsperdayforchart: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	vargetdownloadedforchart2: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	vargetdownloadeddetail: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetdownloadeddetail2: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloaddetail2"}, {"onSuccess":"svgetdownloadeddetail2Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostDownloaded2","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectMonth3.dataValue","targetProperty":"mymonth"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectDay3.dataValue","targetProperty":"myday"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode3.dataValue","targetProperty":"myaccesscode"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectContentModel3.dataValue","targetProperty":"mycmodel"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectRedCode3.dataValue","targetProperty":"myredcode"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectState3.dataValue","targetProperty":"mystate"}, {}],
				wire9: ["wm.Wire", {"expression":"'download'","targetProperty":"mytype"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire8: ["wm.Wire", {"expression":"${selectYear3.dataValue}","targetProperty":"myyear"}, {}]
			}]
		}]
	}],
	vargetdownloadeddetail2: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetdownloadeddetail2SetData"}],
	vargetdownloadeddetail2forchart: ["wm.Variable", {"isList":true,"type":"uploads"}, {}],
	svgetdownloadedovertime: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloadedovertime"}, {"onSuccess":"svgetdownloadedovertimeSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostDownloaded2","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectYear3.dataValue","targetProperty":"myyear"}, {}],
				wire5: ["wm.Wire", {"expression":"${selectOida2.displayValue}","targetProperty":"mypid"}, {}],
				wire1: ["wm.Wire", {"expression":"${selectMonth3.displayValue}","targetProperty":"mymonth"}, {}],
				wire3: ["wm.Wire", {"expression":"${selectRedCode3.displayValue}","targetProperty":"myredcode"}, {}],
				wire4: ["wm.Wire", {"expression":"${selectState3.displayValue}","targetProperty":"mystate"}, {}],
				wire: ["wm.Wire", {"expression":"${selectOwner1.displayValue}","targetProperty":"myowner"}, {}],
				wire9: ["wm.Wire", {"expression":"${selectAccessCode3.displayValue}","targetProperty":"myaccesscode"}, {}],
				wire8: ["wm.Wire", {"expression":"${selectContentModel3.displayValue}","targetProperty":"mycmodel"}, {}],
				wire2: ["wm.Wire", {"expression":"${selectDay3.displayValue}","targetProperty":"myday"}, {}],
				wire6: ["wm.Wire", {"expression":"'download'","targetProperty":"mytype"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}]
			}]
		}]
	}],
	vargetdownloadedovertime: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {"onSetData":"vargetdownloadedovertimeSetData"}],
	svgetviewsovertime: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewsovertime"}, {"onSuccess":"svgetviewsovertimeSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire7: ["wm.Wire", {"expression":"${selectOida.displayValue}","targetProperty":"mypid"}, {}],
				wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":"${selectYear.displayValue}","targetProperty":"myyear"}, {}],
				wire6: ["wm.Wire", {"expression":"${selectState.displayValue}","targetProperty":"mystate"}, {}],
				wire5: ["wm.Wire", {"expression":"${selectRedCode.displayValue}","targetProperty":"myredcode"}, {}],
				wire4: ["wm.Wire", {"expression":"${selectMonth.displayValue}","targetProperty":"mymonth"}, {}],
				wire3: ["wm.Wire", {"expression":"${selectDay.displayValue}","targetProperty":"myday"}, {}],
				wire2: ["wm.Wire", {"expression":"${selectContentModel.displayValue}","targetProperty":"mycmodel"}, {}],
				wire1: ["wm.Wire", {"expression":"${selectAccessCode.displayValue}","targetProperty":"myaccesscode"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire: ["wm.Wire", {"expression":"${selectOwner.displayValue}","targetProperty":"myowner"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostViewed","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vargetviewsovertime: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetviewdetailsperdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewdetailsperdate"}, {"onSuccess":"svgetviewdetailsperdateSuccess","onSuccess1":"svgetviewsdetailpercountry"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"myredcode"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectOida.dataValue","targetProperty":"mypid"}, {}],
				wire7: ["wm.Wire", {"expression":"${selectYear.dataValue}*1","targetProperty":"myyear"}, {}],
				wire8: ["wm.Wire", {"expression":"'view'","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"instanceis"}, {}]
			}]
		}]
	}],
	vargetviewdetailsperdate: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetviewsdetailpercountry: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getviewsdetailpercountry"}, {"onSuccess":"svgetviewsdetailpercountrySuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostViewed","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode.dataValue","targetProperty":"myaccesscode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel.dataValue","targetProperty":"mycmodel"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay.dataValue","targetProperty":"myday"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth.dataValue","targetProperty":"mymonth"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"selectYear.dataValue","targetProperty":"myyear"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"dojoGrid3.selectedItem.v1","targetProperty":"mypid"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}]
			}]
		}]
	}],
	vargetviewdetailspercountry: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetdownloaddetail2percountry: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloaddetail2percountry"}, {"onSuccess":"svgetdownloaddetail2percountrySuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode3.dataValue","targetProperty":"myaccesscode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel3.dataValue","targetProperty":"mycmodel"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay3.dataValue","targetProperty":"myday"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth3.dataValue","targetProperty":"mymonth"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode3.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState3.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
				wire9: ["wm.Wire", {"expression":"${selectYear3.dataValue}*1","targetProperty":"myyear"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"dojoGriddowloadedobjects.selectedItem.v2","targetProperty":"mypid"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostDownloaded2","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vargetdownloaddetail2percountry: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetdownloaddetail2perdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdownloaddetail2perdate"}, {"onSuccess":"svgetdownloaddetail2perdateSuccess"}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectOwner1.dataValue","targetProperty":"myowner"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selectAccessCode3.dataValue","targetProperty":"myaccesscode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selectContentModel3.dataValue","targetProperty":"mycmodel"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"selectDay3.dataValue","targetProperty":"myday"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"selectMonth3.dataValue","targetProperty":"mymonth"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"selectRedCode3.dataValue","targetProperty":"myredcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectState3.dataValue","targetProperty":"mystate"}, {}],
				wire8: ["wm.Wire", {"expression":"''","targetProperty":"mytype"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"dojoGriddowloadedobjects.selectedItem.v2","targetProperty":"mypid"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"selectInstance.displayValue","targetProperty":"myinstance"}, {}],
				wire9: ["wm.Wire", {"expression":"${selectYear3.dataValue}","targetProperty":"myyear"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerMostDownloaded2","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	vargetdownloaddetail2perdate: ["wm.Variable", {"isList":true,"type":"visitlog1_0"}, {}],
	svgetdetailpage2: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"main","service":"getdetailpage2"}, {}, {
		input: ["wm.ServiceInput", {"type":"mainInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"120%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"924px"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","styles":{"backgroundColor":"#020000"},"verticalAlign":"top","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"aspect":"v","height":"89px","padding":"10,0,0,0","source":"https://phaidra.univie.ac.at/static/img/phaidra_shadow_small.png","styles":{},"width":"291px"}, {"onclick":"picture1Click"}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Estadísticas","height":"50px","padding":"4","showing":false,"singleLine":false,"width":"100%"}, {}],
				label10: ["wm.Label", {"caption":"Statistics","height":"100%","padding":"0,0,0,0","singleLine":false,"styles":{"fontSize":"50px","color":"#ffffff"},"width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"border":"1","fullStructure":[
{"label":"Help"},
{"label":"About"},
{"label":"Logout","onClick":"varTemplateLogout"}
],"height":"32px","localizationStructure":{},"showing":false,"transparent":true,"width":"250px"}, {}]
				}],
				panel28: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"200px"}, {}, {
					buttonLogout: ["wm.Button", {"border":"1","caption":"Logout","height":"30px","margin":"0,0,0,6","padding":"4,12,4,12","showing":false,"styles":{},"width":"80px"}, {"onclick":"app.svgetinstances"}],
					paneselectinstance: ["wm.Panel", {"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"styles":{"backgroundColor":"#fdfdfd","color":"#ffffff"},"verticalAlign":"top","width":"150px"}, {}, {
						selectInstance: ["wm.SelectMenu", {"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":undefined,"displayField":"instance","displayValue":"","height":"100%","placeHolder":"SITE","showing":false,"styles":{"color":"#ffffff"},"width":"100%"}, {"onchange":"svgetoidasinit","onchange1":"pageContainer4.inventory.svgetownersinit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
							}]
						}]
					}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panelWelcome: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"319px"}, {}, {
					label6: ["wm.Label", {"caption":"Welcome to Phaidra Statistics!","height":"40px","padding":"4","styles":{"fontSize":"20px"},"width":"100%"}, {}],
					label8: ["wm.Label", {"caption":"","height":"185px","padding":"4","styles":{"fontSize":"20px"},"width":"100%"}, {}],
					selectInstance3: ["wm.SelectMenu", {"caption":"Select SITE","dataField":"instance","dataType":"getinstances1","dataValue":undefined,"desktopHeight":"35px","displayField":"instance","displayValue":"","height":"35px","mobileHeight":"35%","placeHolder":"SITE","required":true,"styles":{"color":"#ffffff"},"width":"168px"}, {"onchange":"selectInstance3Change"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
						}]
					}],
					spacer17: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
					buttonshowall1: ["wm.Button", {"border":"1","caption":"Show All Objects in Repository","desktopHeight":"86px","disabled":true,"height":"86px","styles":{"fontSize":"22px"},"width":"100%"}, {"onclick4":"buttonshowall1Click4"}]
				}],
				tabLayers1: ["wm.TabLayers", {"styles":{},"transition":"slide"}, {}, {
					layerInventory: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Overview","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layerInventoryShow"}, {
						pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"Inventory","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerUploads: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Digital Objects","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"pageContainer5.uploads.layer1","onShow1":"pageContainer5.uploads.svuploads"}, {
						pageContainer5: ["wm.PageContainer", {"deferLoad":true,"pageName":"uploads","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerTopUploaders: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Uploads per User","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"pageContainer6.topuploaders.svinvtopowners"}, {
						pageContainer6: ["wm.PageContainer", {"deferLoad":true,"pageName":"topuploadersnew","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerMostViewed: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Views","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						label5: ["wm.Label", {"align":"left","caption":"Viewed Objects","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
						panelsearch: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#d5d5dc","endColor":"#cfd2dc","colorStop":50}},"verticalAlign":"middle","width":"100%"}, {}, {
							selectOida: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange3":"svgetviews"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetoidasinit","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectYear: ["wm.SelectMenu", {"allowNone":true,"autoComplete":false,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020","restrictValues":false,"styles":{},"width":"154px"}, {"onchange2":"svgetviews"}],
							textType: ["wm.Text", {"caption":"type","dataValue":"Download","displayValue":"Download","height":"30px","showing":false,"width":"201px"}, {}],
							selectUser: ["wm.SelectMenu", {"allowNone":true,"caption":"User","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"154px"}, {"onchange":"svretusers","onchange1":"svgetvisitorspercountry","onchange2":"svgetviews","onchange3":"svgettopdownloads","onchange4":"svgetmetadata","onchange5":"svgetos","onchange6":"svgetbrowser"}],
							selectMonth: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svgetviews"}],
							selectDay: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":31,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svgetviews"}],
							selectPID: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"v1","dataType":"visitlog1_0","dataValue":"","displayField":"v1","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"142px"}, {"onchange":"selectPIDChange","onchange1":"svgetviews","onchange3":"svgettopdownloads","onchange5":"svgetmetadata"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectOwner: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"styles":{},"width":"168px"}, {"onchange":"svgetviews"}],
							selectState: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","styles":{},"width":"152px"}, {"onchange4":"svgetviews"}],
							selectAccessCode: ["wm.SelectMenu", {"allowNone":true,"caption":"Access","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"202px"}, {"onchange5":"svgetviews"}],
							selectRedCode: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange5":"svgetviews"}],
							selectContentModel: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"223px"}, {"onchange2":"svgetviews"}],
							selectInstance1: ["wm.SelectMenu", {"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":"SITE","showing":false,"styles":{},"width":"119px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						breadcrumbLayersMain: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
							layerMainViews: ["wm.Layer", {"borderColor":"","caption":"Main","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
								label4: ["wm.Label", {"caption":"Click on a row for more detail-only data for 2014 and 2015","padding":"4","showing":false,"styles":{"fontStyle":"italic"},"width":"100%"}, {}],
								paneltotalviews: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									panel19: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"309px"}, {}, {
										labeltotalobjectviews: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Total","height":"60px","padding":"4","styles":{"backgroundColor":"green","color":"#ffffff","fontSize":"22px","fontStyle":"italic"},"width":"100%"}, {}],
										dojoGrid3: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owneris","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Owner: \" + ${owneris}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\": \" + ${wm.runtimeId}.formatCell(\"arrow\", ${arrow}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"arrow","width":"20%","align":"right","expression":"'>'","isCustomField":true,"mobileColumn":false}
],"dsType":"visitlog1_0","height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onRenderData":"dojoGrid3RenderData","onSelect":"dojoGrid3Select"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
											}]
										}]
									}],
									dojoGridViews: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoChart1: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									panel27: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
										panel26: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChart4: ["wm.DojoChart", {"chartTitle":"Top 10","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Grouped by Owner","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Grouped by Owner: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"uploads","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"212px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										spacer2: ["wm.Spacer", {"height":"26px","width":"96px"}, {}],
										panedataovertimeviews: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChartviewsovertime: ["wm.DojoChart", {"chartTitle":"Views overtime per Month","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsovertime","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGridviewsovertime: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"monthvisit","title":"Month","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsovertime","targetProperty":"dataSet"}, {}]
												}]
											}]
										}]
									}]
								}]
							}],
							layerViewsDetail: ["wm.Layer", {"borderColor":"","caption":"Views per object","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
								panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"380px"}, {}, {
										labelobjectinfo4: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Object","height":"45px","margin":"0,0,5,0","padding":"4","styles":{"fontSize":"17px","backgroundColor":"#0099e2","color":"#ffffff","fontStyle":"italic"},"width":"375px"}, {}],
										labelobjectinfo1: ["wm.Label", {"align":"center","caption":"Object","height":"45px","padding":"4","styles":{"fontSize":"17px","backgroundColor":"green","color":"#ffffff","fontStyle":"italic"},"width":"375px"}, {}],
										button1: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#0044cc","caption":"Open in phaidra","desktopHeight":"33px","height":"33px","styles":{},"width":"383px"}, {"onclick":"button1Click"}],
										dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"#","width":"20px","align":"left","formatFunc":"list2K1Format","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datevisit","title":"Date viewed","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"timePattern":"HH:mm","formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"howmany","title":"Howmany","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date viewed: \" + ${wm.runtimeId}.formatCell(\"datevisit\", ${datevisit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsdetail","targetProperty":"dataSet"}, {}]
											}]
										}]
									}],
									paneltotalviews1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										labeltotalobjectviews1: ["wm.Label", {"caption":"Views - Top 15 Objects","height":"26px","padding":"4","showing":false,"styles":{"backgroundColor":"#0088e2","color":"#ffffff","fontSize":"16px"},"width":"100%"}, {"onclick":"svgetviews"}],
										dojoGridViews1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
											}]
										}],
										dojoChart5: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
											}]
										}],
										panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
											panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												dojoChart6: ["wm.DojoChart", {"chartTitle":"Views grouped by Date ","chartType":"Lines","height":"100%","hideLegend":true,"hint":"vargetviewsperdayforchart","legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailsperdate","targetProperty":"dataSet"}, {}]
													}]
												}],
												dojoGrid5: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"monthvisit","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","hint":"vargetviewsperdayforchart","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailsperdate","targetProperty":"dataSet"}, {}]
													}]
												}]
											}],
											spacer1: ["wm.Spacer", {"height":"32px","width":"96px"}, {}],
											panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												dojoChart15: ["wm.DojoChart", {"chartTitle":"Views grouped by Country","chartType":"Lines","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"v4","yAxis":"howmany"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailspercountry","targetProperty":"dataSet"}, {}]
													}]
												}],
												dojoGrid10: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewdetailspercountry","targetProperty":"dataSet"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}]
					}],
					layerMostDownloaded2: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Downloads","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetdownloaded"}, {
						label11: ["wm.Label", {"align":"left","caption":"Downloaded Objects","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
						panelsearch3: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#d5d5dc","endColor":"#cfd2dc","colorStop":50}},"verticalAlign":"middle","width":"100%"}, {}, {
							selectOida2: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange3":"svgetdownloaded"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetoidasinit","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectYear3: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"2014,2015,2016,2017,2018","restrictValues":false,"styles":{},"width":"132px"}, {"onchange2":"svgetdownloaded"}],
							textType3: ["wm.Text", {"caption":"type","dataValue":"Download","displayValue":"Download","height":"30px","showing":false,"width":"201px"}, {}],
							selectUser3: ["wm.SelectMenu", {"allowNone":true,"caption":"User","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"154px"}, {"onchange":"svretusers","onchange1":"svgetvisitorspercountry","onchange2":"svgetviews","onchange3":"svgettopdownloads","onchange4":"svgetmetadata","onchange5":"svgetos","onchange6":"svgetbrowser"}],
							selectMonth3: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svgetdownloaded"}],
							selectDay3: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":31,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svgetdownloaded"}],
							selectPID3: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"v1","dataType":"visitlog1_0","dataValue":"","displayField":"v1","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"142px"}, {"onchange":"selectPID3Change","onchange1":"svgetviews","onchange3":"svgettopdownloads","onchange5":"svgetmetadata"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectOwner1: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"styles":{},"width":"131px"}, {"onchange":"svgetdownloaded"}],
							selectState3: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","styles":{},"width":"152px"}, {"onchange4":"svgetdownloaded"}],
							selectAccessCode3: ["wm.SelectMenu", {"allowNone":true,"caption":"Access","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"202px"}, {"onchange5":"svgetdownloaded"}],
							selectRedCode3: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange5":"svgetdownloaded"}],
							selectContentModel3: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"190px"}, {"onchange2":"svgetdownloaded"}],
							selectInstance2: ["wm.SelectMenu", {"caption":"SITE","captionSize":"50px","dataField":"instance","dataType":"getinstances1","dataValue":0,"displayField":"instance","displayValue":"","emptyValue":"zero","height":"30px","placeHolder":"SITE","showing":false,"styles":{},"width":"119px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.vargetinstances","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						breadcrumbLayersMain1: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
							layerMaingetDownloaded: ["wm.Layer", {"borderColor":"","caption":"Main","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
								label12: ["wm.Label", {"caption":"Click on a row for more detail-only data for 2014 and 2015","padding":"4","showing":false,"styles":{"fontStyle":"italic"},"width":"100%"}, {}],
								paneltotalviews2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									panel20: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"444px"}, {}, {
										labeltotalobjectviews6: ["wm.Label", {"caption":"Total","height":"60px","padding":"4","showing":false,"styles":{"backgroundColor":"green","color":"#ffffff","fontSize":"22px","fontStyle":"italic"},"width":"100%"}, {"onclick":"svgetviews"}],
										labeltotalobjectviews2: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Total","height":"60px","padding":"4","styles":{"backgroundColor":"green","color":"#ffffff","fontSize":"22px","fontStyle":"italic"},"width":"100%"}, {"onclick":"svgetviews"}],
										dojoGriddowloadedobjects: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v2","title":"Object","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"typeis","title":"Content Model","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owneris","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v2} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content Model: \" + ${typeis}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Owner: \" + ${owneris}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {"onSelect":"dojoGriddowloadedobjectsSelect"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaded","targetProperty":"dataSet"}, {}]
											}]
										}],
										list3: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v2","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"typeis","title":"Content Model","width":"100px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v2} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Content Model: \" + ${typeis}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Owneris: \" + ${owneris}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"rightNavArrow":true,"showing":false,"styles":{}}, {"onSelect":"list3Select"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaded","targetProperty":"dataSet"}, {}]
											}]
										}]
									}],
									dojoGridViews2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
										panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChart7: ["wm.DojoChart", {"chartTitle":"Top 10","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadedforchart2","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoChart8: ["wm.DojoChart", {"chartTitle":"Grouped by Owner","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadedforchart","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGrid6: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Grouped by Owner","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Grouped by Owner: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"styles":{},"width":"212px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadedforchart2","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										spacer3: ["wm.Spacer", {"height":"23px","width":"96px"}, {}],
										panedataovertimedownloads: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChart17: ["wm.DojoChart", {"chartTitle":"Downloads overtime","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadedovertime","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGrid12: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"monthvisit","title":"Month","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Month: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"200px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadedovertime","targetProperty":"dataSet"}, {}]
												}]
											}]
										}]
									}]
								}]
							}],
							layerDownloadsPerObject: ["wm.Layer", {"borderColor":"","caption":"Downloads per object","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetdownloaddetail2percountry","onShow1":"svgetdownloaddetail2perdate"}, {
								paneltotalviews3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									labeltotalobjectviews3: ["wm.Label", {"caption":"Views - Top 15 Objects","height":"26px","padding":"4","showing":false,"styles":{"backgroundColor":"#0088e2","color":"#ffffff","fontSize":"16px"},"width":"100%"}, {"onclick":"svgetviews"}],
									panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"383px"}, {}, {
										labelobjectinfo5: ["wm.Label", {"_classes":{"domNode":["rounded"]},"align":"center","caption":"Object","height":"43px","margin":"0,0,5,0","padding":"4","styles":{"fontSize":"17px","backgroundColor":"#0099e2","color":"#ffffff","fontStyle":"italic"},"width":"377px"}, {"onclick":"svgetdownloadeddetail2"}],
										labelobjectinfo2: ["wm.Label", {"align":"center","caption":"Total","height":"43px","padding":"4","styles":{"fontSize":"17px","backgroundColor":"green","color":"#ffffff","fontStyle":"italic"},"width":"377px"}, {}],
										button2: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#0044cc","caption":"Open in phaidra","desktopHeight":"33px","height":"33px","width":"100%"}, {"onclick":"button2Click"}],
										dojoGrid4: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"k1","title":"#","width":"20px","align":"left","formatFunc":"list2K1Format","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datevisit","title":"Date download","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"howmany","title":"Howmany","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date download: \" + ${wm.runtimeId}.formatCell(\"datevisit\", ${datevisit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"visitlog1_0","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadeddetail2","targetProperty":"dataSet"}, {}]
											}]
										}]
									}],
									list4: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Datevisit: \" + ${datevisit} +\n\"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Date Downloaded","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"howmany","title":"Howmany","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"showing":false,"styles":{},"width":"381px"}, {"onSelectionChange":"layerViewsDetail"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloadeddetail2","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoGridViews3: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"96px"}, {}],
									panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
										panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChart9: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoChart10: ["wm.DojoChart", {"chartTitle":"Downloads grouped by Date","chartType":"Lines","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","styles":{},"width":"100%","xAxis":"monthvisit","yAxis":"howmany"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail2perdate","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGrid7: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${monthvisit} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"monthvisit","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail2perdate","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										spacer4: ["wm.Spacer", {"height":"23px","width":"96px"}, {}],
										panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											dojoChart16: ["wm.DojoChart", {"chartTitle":"Downloads grouped by Country","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"v4","yAxis":"howmany"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail2percountry","targetProperty":"dataSet"}, {}]
												}]
											}],
											dojoGrid11: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Country: \" + ${v4} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"V1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v4","title":"Country","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"212px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaddetail2percountry","targetProperty":"dataSet"}, {}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						panel22: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}]
					}],
					layerMetadata: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":" Showed Metadata","horizontalAlign":"left","showing":false,"styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetmetadata"}, {
						label7: ["wm.Label", {"align":"left","caption":"Top 10 Most Showed Metadata Objects","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
						panelsearch2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#d5d5dc","endColor":"#cfd2dc","colorStop":50}},"verticalAlign":"middle","width":"100%"}, {}, {
							selectOida3: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange3":"svgetdownloaded"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetoidasinit","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectYear2: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"zero","height":"30px","options":"2014,2015","styles":{},"width":"154px"}, {"onchange2":"svgetviews"}],
							textType2: ["wm.Text", {"caption":"type","dataValue":"Download","displayValue":"Download","height":"30px","showing":false,"width":"201px"}, {}],
							selectUser2: ["wm.SelectMenu", {"allowNone":true,"caption":"User","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"154px"}, {"onchange":"svretusers","onchange1":"svgetvisitorspercountry","onchange2":"svgetviews","onchange3":"svgettopdownloads","onchange4":"svgetmetadata","onchange5":"svgetos","onchange6":"svgetbrowser"}],
							selectMonth2: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svgetviews"}],
							selectDay2: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svgetviews"}],
							selectPID2: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"v1","dataType":"visitlog1_0","dataValue":"","displayField":"v1","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"142px"}, {"onchange":"selectPID2Change","onchange1":"svgetviews","onchange3":"svgettopdownloads","onchange5":"svgetmetadata"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectState2: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","width":"152px"}, {"onchange4":"svgetviews"}],
							selectAccessCode2: ["wm.SelectMenu", {"allowNone":true,"caption":"Access Code","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"202px"}, {"onchange5":"svgetviews"}],
							selectRedCode2: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange5":"svgetviews"}],
							selectContentModel2: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture,Page, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"223px"}, {"onchange2":"svgetviews"}]
						}],
						labeltotalmetadata: ["wm.Label", {"caption":"Objects-Show Metadata","height":"26px","padding":"4","showing":false,"styles":{"backgroundColor":"#0088e2","color":"#ffffff"},"width":"100%"}, {"onclick":"svgetmetadata"}],
						panel15: ["wm.Panel", {"height":"48100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							dojoGridMetadata: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v3} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Howmany: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v3","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Howmany","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"226px"}, {"onCellDblClick":"dojoGrid5CellDblClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"varmetadata","targetProperty":"dataSet"}, {}]
								}]
							}],
							dojoChart3: ["wm.DojoChart", {"height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"v3","yAxis":"howmany"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"varmetadata","targetProperty":"dataSet"}, {}]
								}]
							}]
						}]
					}],
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Event Types","horizontalAlign":"left","padding":"0,0,0,0","showing":false,"styles":{},"verticalAlign":"top"}, {}, {
						pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Stats1","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerVisits: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Website-Visitors","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top"}, {}, {
						pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"visits1","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerMostDetail_Page: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":" Detail Page","horizontalAlign":"left","showing":false,"styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						label13: ["wm.Label", {"align":"left","caption":"Top 10 Most Detail Page Objects","height":"44px","padding":"4","styles":{"backgroundColor":"#0099e2","fontSize":"22px","color":"#ffffff"},"width":"100%"}, {}],
						panelsearch4: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#d5d5dc","endColor":"#cfd2dc","colorStop":50}},"verticalAlign":"middle","width":"100%"}, {}, {
							selectOida4: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"monthis","dataType":"uploads","dataValue":"","displayField":"monthis","displayValue":"","emptyValue":"emptyString","height":"30px","restrictValues":false,"width":"134px"}, {"onchange3":"svgetdownloaded"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetoidasinit","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectYear4: ["wm.SelectMenu", {"allowNone":true,"caption":"Year","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"zero","height":"30px","options":"2014,2015","styles":{},"width":"154px"}, {"onchange2":"svgetdownloaded"}],
							textType4: ["wm.Text", {"caption":"type","dataValue":"Download","displayValue":"Download","height":"30px","showing":false,"width":"201px"}, {}],
							selectUser4: ["wm.SelectMenu", {"allowNone":true,"caption":"User","captionSize":"50px","dataField":"dataValue","dataValue":0,"displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"154px"}, {"onchange":"svretusers","onchange1":"svgetvisitorspercountry","onchange2":"svgetviews","onchange3":"svgettopdownloads","onchange4":"svgetmetadata","onchange5":"svgetos","onchange6":"svgetbrowser"}],
							selectMonth4: ["wm.Number", {"caption":"Month","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-12","spinnerButtons":true,"styles":{},"width":"118px"}, {"onchange":"svgetdownloaded"}],
							selectDay4: ["wm.Number", {"caption":"Day","captionSize":"40px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","maximum":12,"minimum":1,"placeHolder":"1-30","spinnerButtons":true,"styles":{},"width":"102px"}, {"onchange":"svgetdownloaded"}],
							selectPID4: ["wm.SelectMenu", {"allowNone":true,"caption":"PID","captionSize":"40px","dataField":"v1","dataType":"visitlog1_0","dataValue":"","displayField":"v1","displayValue":"","emptyValue":"emptyString","height":"30px","showing":false,"styles":{},"width":"142px"}, {"onchange":"selectPID4Change","onchange1":"svgetviews","onchange3":"svgettopdownloads","onchange5":"svgetmetadata"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
								}]
							}],
							selectOwner2: ["wm.Text", {"caption":"Owner","captionSize":"50px","changeOnKey":true,"dataValue":"","displayValue":"","emptyValue":"emptyString","height":"30px","resetButton":true,"styles":{},"width":"168px"}, {"onchange":"svgetdownloaded"}],
							selectState4: ["wm.SelectMenu", {"allowNone":true,"caption":"State","captionSize":"50px","dataField":"dataValue","dataValue":"Active","displayField":"dataValue","displayValue":"Active","emptyValue":"emptyString","height":"30px","options":"Active, Inactive, Deleted","styles":{},"width":"152px"}, {"onchange4":"svgetdownloaded"}],
							selectAccessCode4: ["wm.SelectMenu", {"allowNone":true,"caption":"Access Code","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"public,restricted","width":"202px"}, {"onchange5":"svgetdownloaded"}],
							selectRedCode4: ["wm.SelectMenu", {"allowNone":true,"caption":"RedCode","captionSize":"70px","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"DV,XX,XV,BV,VR","width":"152px"}, {"onchange5":"svgetdownloaded"}],
							selectContentModel4: ["wm.SelectMenu", {"allowNone":true,"caption":"Content Model","dataField":"dataValue","dataValue":"","displayField":"dataValue","displayValue":"","emptyValue":"emptyString","height":"30px","options":"Picture,Page, PDFDocument,Book, Collection,Video, Audio,Asset,Container,Resource,LaTeXDocument,Paper","styles":{},"width":"223px"}, {"onchange2":"svgetdownloaded"}]
						}],
						breadcrumbLayersMain2: ["wm.BreadcrumbLayers", {"transition":"slide"}, {}, {
							layerMaingetDownloaded1: ["wm.Layer", {"borderColor":"","caption":"Main","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
								label14: ["wm.Label", {"caption":"Click on a row for more detail-only data for 2014 and 2015","padding":"4","showing":false,"styles":{"fontStyle":"italic"},"width":"100%"}, {}],
								paneltotalviews4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									panel23: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"309px"}, {}, {
										labeltotalobjectviews4: ["wm.Label", {"caption":"Total","height":"60px","padding":"4","styles":{"backgroundColor":"green","color":"#ffffff","fontSize":"22px","fontStyle":"italic"},"width":"100%"}, {"onclick":"svgetviews"}],
										list5: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v2","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"howmany","title":"Downloads","width":"100%","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v2} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Owneris: \" + ${owneris}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Downloads: \" + ${howmany}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"height":"100%","minDesktopHeight":60,"rightNavArrow":true,"styles":{},"width":"309px"}, {"onSelect":"list5Select"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"vargetdownloaded","targetProperty":"dataSet"}, {}]
											}]
										}]
									}],
									dojoGridViews4: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoChart11: ["wm.DojoChart", {"chartTitle":"Top 10 Most Downloaded","chartType":"Pie","dataSet":"","height":"100%","padding":"4","verticalLegend":true,"width":"100%","xAxis":"v2","yAxis":"howmany"}, {}],
									dojoChart12: ["wm.DojoChart", {"chartTitle":"Results Grouped by Owner","chartType":"Pie","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoGrid8: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Grouped by Owner","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Grouped by Owner: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"uploads","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"212px"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
										}]
									}]
								}]
							}],
							layerDownloadsPerObject1: ["wm.Layer", {"borderColor":"","caption":"Downloads per object","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"svgetviewsdetail"}, {
								panel24: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									labelobjectinfo3: ["wm.Label", {"caption":"Object","height":"100%","padding":"4","styles":{"fontSize":"17px","backgroundColor":"green","color":"#ffffff","fontStyle":"italic"},"width":"375px"}, {}]
								}],
								button3: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#0044cc","caption":"Open in phaidra","desktopHeight":"33px","height":"33px","width":"383px"}, {"onclick":"button3Click"}],
								paneltotalviews5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									labeltotalobjectviews5: ["wm.Label", {"caption":"Views - Top 15 Objects","height":"26px","padding":"4","showing":false,"styles":{"backgroundColor":"#0088e2","color":"#ffffff","fontSize":"16px"},"width":"100%"}, {"onclick":"svgetviews"}],
									list6: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"show":true,"field":"k1","title":"#","width":"100%","align":"left","formatFunc":"list2K1Format","expression":"","mobileColumn":false},
{"show":false,"field":"v1","title":"Object","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datevisit","title":"Date Viewed","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"#: \" + ${wm.runtimeId}.formatCell(\"k1\", ${k1}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date Viewed: \" + ${wm.runtimeId}.formatCell(\"datevisit\", ${datevisit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"owner","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"styles":{},"width":"381px"}, {"onSelectionChange":"layerViewsDetail"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviewsdetail","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoGridViews5: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Object: \" + ${v1} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${wm.runtimeId}.formatCell(\"howmany\", ${howmany}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"k1","title":"K1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"v1","title":"Object","width":"100%","align":"left","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"k2","title":"K2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v2","title":"V2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k3","title":"K3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v3","title":"V3","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k4","title":"K4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v4","title":"V4","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datevisit","title":"Datevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"timevisit","title":"Timevisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"k5","title":"K5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"v5","title":"V5","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"monthvisit","title":"Monthvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dayvisit","title":"Dayvisit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"howmany","title":"Views","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"round":true},"mobileColumn":false},
{"show":false,"field":"typeis","title":"Typeis","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"owner","title":"Owner","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"owneris","title":"Owneris","width":"100%","displayType":"String","align":"left","formatFunc":""}
],"height":"234px","localizationStructure":{},"minDesktopHeight":60,"showing":false,"singleClickEdit":true,"styles":{"backgroundColor":"#00ade2","color":"#ffffff"}}, {"onCellDblClick":"dojoGrid6CellDblClick","onSelect":"dojoGrid6Select"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoChart13: ["wm.DojoChart", {"chartTitle":"Top 10 Most Viewed","chartType":"Pie","height":"100%","padding":"4","showing":false,"styles":{},"verticalLegend":true,"width":"100%","xAxis":"v1","yAxis":"howmany"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"vargetviews","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoChart14: ["wm.DojoChart", {"chartTitle":"Views grouped by Date","chartType":"Lines","height":"100%","padding":"4","styles":{},"verticalLegend":true,"width":"100%","xAxis":"monthis","yAxis":"count"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
										}]
									}],
									dojoGrid9: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"monthis","title":"Grouped by Owner","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"count","title":"Views","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Grouped by Owner: \" + ${monthis} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Views: \" + ${count}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"uploads","height":"100%","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true,"width":"212px"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"varuploadsperdayforchart","targetProperty":"dataSet"}, {}]
										}]
									}]
								}]
							}]
						}],
						panel25: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}]
					}],
					layerMap: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Map","horizontalAlign":"left","showing":false,"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						dojoGridlocations: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"visits","title":"Visits","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Visits: \" + ${visits} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Country: \" + ${wm.runtimeId}.formatCell(\"country\", ${country}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Latitude: \" + ${latitude}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Longitude: \" + ${longitude}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"country","title":"Country","width":"100%","align":"left","formatFunc":"","expression":"if(${country}==\"at\")\n{\n${country}+\" Austria\";\n}\nelse\n{\n${country};\n}","mobileColumn":false},
{"show":true,"field":"latitude","title":"Latitude","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"longitude","title":"Longitude","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"minDesktopHeight":60,"singleClickEdit":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varvisitorspercountry2","targetProperty":"dataSet"}, {}]
							}]
						}],
						html1: ["wm.Html", {"height":"100%","html":"<div id=\"container\" style=\"position: relative; width: 500px; height: 300px;\"></div>","minDesktopHeight":15}, {}]
					}],
					layerDetailPage: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Detail Page","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainer7: ["wm.PageContainer", {"deferLoad":true,"pageName":"Detailpage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onShow":"svgetoidasinit"}]
					}],
					layerShowMetadata: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Show Metadata","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
					layerSearcesh: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Searches in Phaidra","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"Searches","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}]
				}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"","height":"100%","padding":"4"}, {}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
			}]
		}]
	}]
}