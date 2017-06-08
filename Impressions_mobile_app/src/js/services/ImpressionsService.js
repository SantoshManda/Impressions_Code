angular.module('DoxNotes')
.service('ImpressionDetails',function($http){
	var impressions_count = {
"impressions": [
  {
"count": 17,
"ename": "viraj kamath",
"eid": 1
},
  {
"count": 15,
"ename": "vilkesh",
"eid": 1
},
  {
"count": 9,
"ename": "santosh manda",
"eid": 1
},
  {
"count": 8,
"ename": "santosh",
"eid": 1
},
  {
"count": 4,
"ename": "undefined",
"eid": 1
},
  {
"count": 1,
"ename": "pankaj ",
"eid": 1
},
  {
"count": 1,
"ename": "def",
"eid": 1
},
  {
"count": 1,
"ename": "abc",
"eid": 1
}
],
};

var impressions_report_data = {
"impressions": [
  {
"id": 4,
"eid": 2,
"employee_name": "vilkesh",
"comment": "He is late to the meeting",
"created_by": "admin",
"created_by_empid": 5,
"impression_time": "18-09-2016 10:00:00 PM"
},
  {
"id": 7,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "He is late for meeting.",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "15-09-2016 08:28:00 AM"
},
  {
"id": 10,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "He is useless.",
"created_by": "vilkesh ",
"created_by_empid": 5,
"impression_time": "16-09-2016 07:29:00 AM"
},
  {
"id": 11,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "He is late for the meeting.",
"created_by": "vilkesh ",
"created_by_empid": 5,
"impression_time": "22-09-2016 07:28:00 AM"
},
  {
"id": 12,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "Late for the meeting as usual.",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "14-09-2016 11:27:00 AM"
},
  {
"id": 19,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "he is late",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "29-09-2016 08:56:07 AM"
},
  {
"id": 21,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "time",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "29-09-2016 10:33:57 AM"
},
  {
"id": 24,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "dgfsd",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "29-09-2016 10:39:50 AM"
},
  {
"id": 27,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "dsafdsadfas",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "29-09-2016 11:13:55 PM"
},
  {
"id": 37,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "dsaf",
"created_by": "santosh",
"created_by_empid": 5,
"impression_time": "30-09-2016 04:59:37 PM"
},
  {
"id": 38,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "dsaf",
"created_by": "santosh",
"created_by_empid": 5,
"impression_time": "30-09-2016 05:11:30 PM"
},
  {
"id": 45,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "Late for the meeting.",
"created_by": "santosh",
"created_by_empid": 5,
"impression_time": "13-10-2016 02:03:00 AM"
},
  {
"id": 48,
"eid": 2,
"employee_name": "vilkesh ",
"comment": "late for the meeting.",
"created_by": "Santosh Manda",
"created_by_empid": 5,
"impression_time": "19-10-2016 12:34:00 AM"
},
  {
"id": 50,
"eid": 2,
"employee_name": "vilkesh",
"comment": "He is late to the meeting",
"created_by": "admin",
"created_by_empid": 5,
"impression_time": "18-09-2016 04:30:00 PM"
},
  {
"id": 51,
"eid": 2,
"employee_name": "vilkesh",
"comment": "He is late to the meeting",
"created_by": "admin",
"created_by_empid": 5,
"impression_time": "18-09-2016 04:30:00 PM"
}
],
};
return {
            getImpressionsPerEmployee: function () {
                return impressions_count;
            },

            getImpressionsDataPerEmployee : function(){
              return impressions_report_data;
            }

        };
})