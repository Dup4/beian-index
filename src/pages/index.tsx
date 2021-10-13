import React from "react";
import { Helmet } from "umi";
import { GithubIcon, MailIcon } from "@/pages/icons";
import "./index.less";

interface BeianInfo {
  beianID: string;
  title: string;
  description?: string;
}

const beianInfoDict: Record<string, BeianInfo> = {
  localhost: {
    title: "Dev Test",
    beianID: "beianID",
  },
  "www.wi-ki.top": {
    title: "经验分析",
    beianID: "浙ICP备20011170号-2",
  },
  "www.dup4.cn": {
    title: "个人经验分析",
    beianID: "浙ICP备20011170号-3",
  },
  "www.pastego.cn": {
    title: "代码粘贴板",
    beianID: "浙ICP备20011170号-4",
  },
  "www.xcpcio.com": {
    title: "信息分析",
    beianID: "浙ICP备20011170号-5",
  },
  "www.acnow.cn": {
    title: "灵活判题",
    beianID: "浙ICP备20011170号-7",
  },
};

function getYear(startYear: number) {
  let CurYear = new Date().getFullYear();
  let res: string = startYear.toString();
  if (CurYear > startYear) {
    res = [startYear, "-", CurYear].join("");
  }
  return res;
}

function getBeianItem(hostname: string) {
  if (!beianInfoDict[hostname]) {
    return null;
  }

  return (
    <div>
      <a href="http://beian.miit.gov.cn/">{beianInfoDict[hostname].beianID}</a>
    </div>
  );
}

function getHomePageUrl(hostname: string) {
  return "https://" + hostname.trim().slice(4);
}

function getHomePageTitle(hostname: string) {
  return beianInfoDict[hostname]?.title ?? "";
}

const IndexPage: React.FC<{}> = () => {
  const FooterItem = [
    "Copyright © ",
    getYear(2020),
    ", All rights reserved. @Dup4.",
  ];

  const hostname = window.location.hostname;

  return (
    <>
      <Helmet>
        <title>{getHomePageTitle(hostname)}</title>
      </Helmet>

      <h1>Hello. </h1>

      <p>
        You probably want to enter{" "}
        <a href={getHomePageUrl(hostname)} title={getHomePageTitle(hostname)}>
          HomePage
        </a>
        .
      </p>

      <p>
        <a
          className="MuiButtonBase-root MuiIconButton-root"
          target="_blank"
          href="https://github.com/Dup4"
          title="Github"
          aria-disabled="false"
          aria-label="go to Github"
          rel="noreferrer"
        >
          <span className="MuiIconButton-label">
            <GithubIcon />
          </span>
          <span className="MuiTouchRipple-root"></span>
        </a>

        <a
          style={{ marginLeft: "10px" }}
          className="MuiButtonBase-root MuiIconButton-root"
          aria-disabled="false"
          aria-label="Contact by email"
          target="_blank"
          rel="noreferrer"
          href="mailto: lyuzhi.pan@gmail.com"
          title="Email"
        >
          <span className="MuiIconButton-label">
            <MailIcon />
          </span>
          <span className="MuiTouchRipple-root"></span>
        </a>
      </p>

      <div className="footer">
        <div>{FooterItem}</div>
        {getBeianItem(hostname)}
      </div>
    </>
  );
};

export default IndexPage;
