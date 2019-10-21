FROM registry.cn-hangzhou.aliyuncs.com/codemaohub/codemao-master:11-onbuild

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN chown -R codemao.codemao .
RUN chown codemao.codemao -R /srv

# qiniu upload
RUN mkdir -p /srv/qiniu \
    && curl -o /srv/qiniu/qshell https://ops-files.codemao.cn/qshell \
    && chmod -R +x /srv/qiniu

USER codemao

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

RUN npm run build

ARG QN_AKEY=''
ARG QN_SKEY=''

RUN echo "UPLOAD FILES TO QINIU SERVER" \
    && if [ "$QN_AKEY" != ''  -a  "$QN_SKEY" != '' ]; then /srv/qiniu/qshell account $QN_AKEY $QN_SKEY \ 
    && /srv/qiniu/qshell qupload 2 ./config/qnconfig.json; fi


ENTRYPOINT ["npm","run"]

CMD ["production"]