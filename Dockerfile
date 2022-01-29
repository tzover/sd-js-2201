FROM node:16.13.0-slim

# Set environments and arguments
ENV USER_NAME=node
ENV USER_UID=1000
ARG wkdir=/home/${USER_NAME}/app

# Install apt packages
RUN apt update && apt install -y \
    sudo curl vim wget procps \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

# Change language and timezone (UTC -> JST)
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# Setup node container
WORKDIR ${wkdir}
COPY ./app/ /home/${USER_NAME}/app/
# COPY ./app/package*.json /home/${USER_NAME}/app/
RUN yarn install

# RUN npm run-script build

# Switch user
RUN echo "root:root" | chpasswd \
    && usermod -aG sudo ${USER_NAME} \
    && echo "${USER_NAME}:${USER_NAME}" | chpasswd \
    && echo "%${USER_NAME}    ALL=(ALL)    NOPASSWD:    ALL" >> /etc/sudoers.d/${USER_NAME} \
    && chmod 0440 /etc/sudoers.d/${USER_NAME} \
    && chown -hR ${USER_NAME}:${USER_NAME} ${wkdir} 

USER ${USER_NAME}

# CMD [ "npx", "serve", "-s", "-n", "build" ]