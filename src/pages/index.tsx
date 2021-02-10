import React, { useEffect, useState } from 'react';

import { Card, LinkDescription } from '../components/Card';
import { Clock } from '../components/Clock';
import { SearchBox } from '../components/SearchBox';
import { Snow } from '../components/Show';

interface Config {
  sections: {
    headline: string;
    color: string;
    links: LinkDescription[];
  }[];
}

const gistId = '717926d7537f54f2176e00733c6f7195';

const IndexPage = () => {
  const [config, setConfig] = useState<Config>();

  const discoverConfigFile = async () => {
    const gistResponse = await fetch(`https://api.github.com/gists/${gistId}`);
    const json = await gistResponse.json();
    return json.files['startpage.json'].raw_url as string;
  };
  const fetchData = async () => {
    const configUrl = await discoverConfigFile();
    const configResponse = await fetch(configUrl);
    const json = await configResponse.json();
    setConfig(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const gridColumnTemplate = `grid-cols-${config?.sections.length}`;
  return (
    <div className="w-full h-full bg-gray-700 overflow-auto">
      <Snow />
      <div
        className={`my-0 mx-auto mt-8 font-sans grid ${gridColumnTemplate}`}
        style={{
          maxWidth: '1024px',
        }}
      >
        <Clock className="col-start-2 col-end-4 mx-auto my-12" />
        <SearchBox
          className="col-start-2 col-end-4 my-2 row-start-2"
          style={{ width: 'calc(100% - (2* 0.3rem) - 6px)' }}
        />

        {config?.sections.map(section => (
          <Card key={section.headline} {...section} className="row-start-3" />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
