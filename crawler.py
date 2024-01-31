
# -*- coding: utf-8 -*-
#!/usr/bin/python
###1.通过nacos api获取到微服务列表存入数组。  2.建立一个标准列表 3.用数组对比函数列出不同的元素并打印
import requests
import json
import subprocess
import logging
import pdb
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)
# 发起HTTP请求获取网页内容
#url = 'https://nacos.cunzhiliao.com/nacos/v1/ns/service/list?pageNo=1&pageSize=20&namespaceId=cff2807d-0f18-406c-8649-7b3af485a164'  # 替换为目标网页的URL
url = 'http://192.168.1.218:8848/nacos/v1/ns/service/list?pageNo=1&pageSize=20&namespaceId=test' 
response = requests.get(url)

# 检查请求是否成功
if response.status_code == 200:
    # 将网页内容存储到文件中
    #with open('output.html', 'w', encoding='utf-8') as file:
    with open('output.html', 'w') as file:
        file.write(response.text)
    print("网页内容已存储到output.html文件中")
else:
    print("请求失败，状态码:", response.status_code)

with open('output.html', 'r') as file:
    data = json.load(file)

village_array = [item for item in data['doms'] if item.startswith('village')]
prod_set = set(village_array)
print(prod_set)
base_set = ('village-other-service','village-farm-api', 'village-minor-service', 'village-app-web', 'village-govt-web','village-kernel-service','village-bigscreen', 
'village-govt-service','village-sso-web', 'village-pay-service', 'village-open-web', 'village-auth-service', 'village-back-web' )

# diff_set is list type.
diff_set = prod_set.symmetric_difference(base_set)

diff_string=', '.join(diff_set)
##quote the diff_set
webhook_Url="https://oapi.dingtalk.com/robot/send?access_token=66c8be847bf48afedec37369d2d58af4e365e06c805c00fa109904668f096238"
# ##create the payload to be sent:
payload = {
     "msgtype": "text",
          "text": {
     "content": "微服务列表有变化："  + diff_string
 }
 }
print(payload)
headers = {
     "Content-Type": "application/json"
 }
response=requests.post(webhook_Url,json=payload,headers=headers)
data = json.loads(response.content.decode())
print(data)


####restart service if they are down!!!#####
# Define the command
####command = "for i in ${diff_set[@]};do kubectl --kubeconfig=./k3s.yaml patch deployment $i  -p '{"spec": {"replicas": 1}}';done"
# set_string=''.join(diff_set)
# print(set_string)
##shell的语法
#command = "for i in $diff_set[@];do echo $i;done"
# command =  f"for i in {set_string}; do kubectl --kubeconfig=./k3s.yaml patch deployment $i-starter -p '{{\"spec\": {{\"replicas\": 1}}}}' -n test; done" 
# Execute the command
# process = subprocess.Popen(command,shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE,text=True)
# output, error = process.communicate()
#logger.debug("Output: %s", output)
#logger.debug("Error: %s", error)
# Print the output and error
# print("Output:", output)  # Decode bytes to string
# print("Error:", error)  # Decode bytes to string

