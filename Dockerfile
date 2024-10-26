FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/xLordkayx/redhood /root/sylivanus

WORKDIR /root/sylivanus/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
