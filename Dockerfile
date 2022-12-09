FROM ubuntu:jammy
COPY . .

RUN apt-get update && apt-get upgrade -y && apt-get install -y wget unzip python3 python3-pip

# Install nvm, npm, and yarn
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && export NVM_DIR="$HOME/.nvm" \
  && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
  && echo ". \"$HOME/.nvm/nvm.sh\"" >> ~/.bashrc \
  && nvm install 16 \
  && npm install -g yarn
  
RUN pip3 install -r requirements.txt --user 
RUN yarn install                            
RUN yarn dev                                
RUN yarn md                

CMD python3 server/server.py 
