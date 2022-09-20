const index = require('../index');

//const event = require('./requesExample');
//const event = require('./requestExampleGetPhotos');
//const event = require('./requestExamplePOST');

const event ={
    "path": "/path/to/resource",
  "httpMethod": "GET",
    "headers": {
        "Authorization":"eyJraWQiOiJNa3hlNU4yYTEwMmowSVJTdndaMkNDSmxXV0RmWHF5eU5GdjhXVTFRdjBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmNjRjOTMzYy05MTZmLTRiZTgtOThjMy1mNWMwZGI3MDcxYWMiLCJjb2duaXRvOmdyb3VwcyI6WyJwaG90b2dyYXBoZXIiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1ZDZDRNWjlYOCIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJzZWJhc2NhcmRvbmFjMTEiLCJnaXZlbl9uYW1lIjoiU2ViYXN0aWFuIiwib3JpZ2luX2p0aSI6ImFjOTc0NTAyLWI2OGItNDgzMS05MjFiLTE1YzVlMTM5ZjE0ZCIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjU0Nzc0OTQ2MjgwMjpyb2xlXC9Db2duaXRvX3Bob3RvRXZlbnRBdXRoX1JvbGUiXSwiYXVkIjoidm0xc3AydTZnYzFndXY5aDJrNDN2ZDM0IiwiZXZlbnRfaWQiOiI0N2NkZWE1OS03OGI0LTQ0YzUtOTUxNi1lMGJhOGVhZmUwOTgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY2MzY4ODY3MCwibmlja25hbWUiOiJzZWJhc2NhcmRvbmFjMTEiLCJwaG9uZV9udW1iZXIiOiIrNTczMTQ3MTM4NzY4IiwiZXhwIjoxNjYzNzA1NTkyLCJpYXQiOjE2NjM3MDE5OTIsImp0aSI6ImMxNGVkZDk4LWJjYjEtNDJlMi1hM2RhLTgwZWNjOGY0NDhlYiIsImVtYWlsIjoic2ViYXNjYXJkb25hYzExQGdtYWlsLmNvbSJ9.0R9bDr9zvG_qo1zszSXhhuMJAvlTaEIB8mRllrm7qmio5vJ-fsV845lMC4aCsdg1_daxro9J8vgO3M-y0X8hAzyZzXIm2JHyYvn2FVUj7vlujtKP6Slt1LHMsX3apecK_Czjy_c_Dt-3srosnmL5_wr8aJWcp5-MjLHzqgBR9Fg1Ahw8vF2-Iu2Cs_12bJsQlx0jMuvxsWyseq8EU9QNkG7KeE51YuqoxBXgzPGmVMrAFSUB4s7Dz55HPV_enQb85hzF8YDQOxMBe_JJ1SXQ8odPen7pz7HqYKy1vTcijmzUZoyKTPc0gvtNPe8UPsEgsaSU18RQwssKCmtbV_pi7w",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, sdch"
    }
}
index.handler(event,{},{});