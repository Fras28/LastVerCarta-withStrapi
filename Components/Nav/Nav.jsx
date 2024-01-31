import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { Route } from "react-router-dom";

export const Nav = (id) => {
  const volver = () => {
    window.history.back(
      ); 
  };

  return (
    <div className="contNav">
      <div className="nav">
        <Route path={`/:id/Landing/Cafeteria`}>
          <Link className="backLink" to={`/${id.id}/Landing`}>
            <p className="back">
            <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </Link>
        </Route>
        <Route path={`/:id/Landing/TrackClub`}>
          <Link className="backLink" to={`/${id.id}/Landing`}>
            <p className="back">
            <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </Link>
        </Route>
        <Route path={`/:id/Landing/Bebidas`}>
          <Link className="backLink" to={`/${id.id}/Landing`}>
            <p className="back">
            <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </Link>
        </Route>
        <Route path={`/:id/Landing/SpecialEvent`}>
          <Link className="backLink" to={`/${id.id}/Landing`}>
            <p className="back">
              <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </Link>
        </Route>
        <Route path={`/:id/Landing/Comidas`}>
          <Link className="backLink" to={`/${id.id}/Landing`}>
            <p className="back">
            <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </Link>
        </Route>
        <Route path={`/:id/Bag`}>
          <a className="bakBagBtn">
          <p className="back" onClick={volver}>
            <svg
                height="18"
                viewBox="0 0 710 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
                  fill=" white"
                />
                <path
                  d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
                  fill=" white"
                />
              </svg>
            </p>
          </a>
        </Route>
        <div className="morton foolishIn">
          <NavLink to={`/${id.id}`}>
          <svg height="60" viewBox="0 0 251 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.34372 43.7595C3.63266 64.7788 12.017 91.1336 22.442 111.048C24.0404 114.101 27.3095 116 30.9589 116C37.4377 116 42.7977 109.733 42.3595 102.48C41.261 84.2936 44.5777 65.7214 49.5983 49.1445L49.4853 49.0697C49.5687 48.9436 49.6522 48.8177 49.736 48.692C54.8519 31.9405 61.69 17.2579 67.4338 7.11818C48.7153 7.84525 35.434 11.8774 26.2334 17.8363C16.1344 24.3771 10.66 33.4249 8.34372 43.7595ZM49.3468 102.057C48.3174 85.0164 51.4097 67.4821 56.1323 51.7233C62.489 42.3389 69.9382 33.9661 77.287 27.1642C85.5495 19.5167 98.0859 19.4552 109.975 23.699C115.033 25.5045 120.584 27.0002 125.317 27.0002C130.049 27.0002 135.6 25.5045 140.658 23.699C152.547 19.4552 165.084 19.5167 173.346 27.1642C180.695 33.9661 188.144 42.3389 194.501 51.7233C199.223 67.4821 202.316 85.0164 201.286 102.057C200.886 108.679 203.836 115.301 208.911 119.275C208.65 120.086 208.371 120.898 208.072 121.709C197.783 149.602 188.761 168.7 177.15 181.063L173.744 144.946C172.025 126.724 160.302 111.657 144.349 104.871C142.491 100.748 141.483 96.2142 141.483 91.5268V50.1667C141.483 41.2381 134.245 34 125.317 34C116.388 34 109.15 41.2381 109.15 50.1667V91.5268C109.15 96.2142 108.142 100.748 106.284 104.871C90.3314 111.657 78.608 126.724 76.8894 144.946L73.483 181.063C61.8726 168.7 52.8506 149.602 42.5612 121.709C42.2621 120.898 41.9828 120.087 41.7226 119.275C46.7973 115.301 49.7468 108.679 49.3468 102.057ZM214.639 124.131C203.282 154.918 192.968 176.598 177.995 190.021L178.35 193.785C179.322 204.092 171.215 213 160.862 213C153.909 213 147.397 210.358 142.479 205.861C137.175 206.632 131.474 207 125.317 207C119.159 207 113.458 206.632 108.155 205.861C103.236 210.358 96.7245 213 89.7713 213C79.4185 213 71.3111 204.092 72.2832 193.785L72.6382 190.021C57.6656 176.598 47.3508 154.918 35.9938 124.131C35.7853 123.566 35.5853 123 35.3937 122.434C33.9905 122.802 32.508 123 30.9589 123C24.9112 123 19.1394 119.833 16.2404 114.295C5.59791 93.9647 -3.75503 65.7337 1.51318 42.2285C4.18653 30.3008 10.6308 19.6017 22.4281 11.961C34.1339 4.37952 50.8112 0 73.6654 0H74.9373L91.6536 13.9991C98.6281 13.4567 105.84 14.7904 112.328 17.1064C117.192 18.8428 121.82 20.0002 125.317 20.0002C128.813 20.0002 133.441 18.8428 138.305 17.1064C144.793 14.7904 152.005 13.4567 158.98 13.9991L175.696 0H176.968C199.822 0 216.499 4.37952 228.205 11.961C240.002 19.6017 246.447 30.3008 249.12 42.2285C254.388 65.7337 245.035 93.9647 234.393 114.295C231.494 119.833 225.722 123 219.674 123C218.125 123 216.643 122.802 215.239 122.434C215.048 123 214.848 123.566 214.639 124.131ZM135.479 195.639C135.996 196.966 136.609 198.236 137.308 199.442C133.567 199.816 129.58 200 125.317 200C121.053 200 117.066 199.816 113.325 199.442C114.025 198.236 114.638 196.966 115.154 195.639L117.109 190.614C118.426 187.229 121.685 185 125.317 185C128.948 185 132.207 187.229 133.524 190.614L135.479 195.639ZM134.483 91.5268C134.483 95.1773 134.987 98.7526 135.943 102.169C132.515 101.403 128.957 101 125.317 101C121.676 101 118.119 101.403 114.69 102.169C115.646 98.7526 116.15 95.1773 116.15 91.5268V50.1667C116.15 45.1041 120.254 41 125.317 41C130.379 41 134.483 45.1041 134.483 50.1667V91.5268ZM167.734 15.7983C171.453 17.1028 174.966 19.1256 178.101 22.027C181.107 24.809 184.129 27.8419 187.095 31.093C183.398 22.2647 179.504 14.6273 176.091 8.79946L167.734 15.7983ZM201.035 49.1444L201.148 49.0697C201.065 48.9436 200.981 48.8177 200.897 48.692C195.781 31.9405 188.943 17.2579 183.199 7.11818C201.918 7.84525 215.199 11.8774 224.4 17.8363C234.499 24.3771 239.973 33.4249 242.289 43.7595C247.001 64.7788 238.616 91.1336 228.191 111.048C226.593 114.101 223.324 116 219.674 116C213.196 116 207.835 109.733 208.274 102.48C209.372 84.2936 206.055 65.7214 201.035 49.1444ZM74.5421 8.79946L82.8994 15.7983C79.18 17.1028 75.6669 19.1256 72.5322 22.027C69.5264 24.809 66.504 27.8419 63.5383 31.0929C67.2351 22.2647 71.1295 14.6273 74.5421 8.79946ZM125.317 108C103.893 108 85.8675 124.301 83.8584 145.603L79.2523 194.442C78.6675 200.642 83.5441 206 89.7713 206C98.1159 206 105.605 200.878 108.63 193.101L110.585 188.076C112.949 182.001 118.798 178 125.317 178C131.835 178 137.685 182.001 140.048 188.076L142.003 193.101C145.028 200.878 152.517 206 160.862 206C167.089 206 171.966 200.642 171.381 194.442L166.775 145.603C164.766 124.301 146.741 108 125.317 108ZM125.317 117C120.836 117 114.136 118.164 108.435 121.798C102.546 125.552 97.8166 131.918 97.8166 141.747C97.8166 147.771 99.5422 152.231 102.473 155.464C105.327 158.612 109.01 160.244 112.261 161.272C113.897 161.79 115.509 162.179 116.914 162.512L117.169 162.573L117.17 162.573C118.512 162.892 119.595 163.149 120.511 163.438C121.523 163.758 121.937 164.004 122.063 164.107L122.069 164.112C122.069 164.112 121.998 164.047 121.927 163.907C121.837 163.732 121.817 163.573 121.817 163.5H128.817C128.817 163.573 128.796 163.732 128.707 163.907C128.639 164.04 128.572 164.105 128.565 164.111L128.57 164.107C128.696 164.004 129.11 163.758 130.122 163.438C131.038 163.149 132.121 162.892 133.463 162.573L133.464 162.573L133.719 162.512C135.124 162.179 136.736 161.79 138.372 161.272C141.623 160.244 145.306 158.612 148.16 155.464C151.091 152.231 152.817 147.771 152.817 141.747C152.817 131.918 148.087 125.552 142.198 121.798C136.497 118.164 129.797 117 125.317 117ZM128.011 156.764C127.164 157.032 126.213 157.382 125.317 157.89C124.42 157.382 123.469 157.032 122.622 156.764C121.448 156.393 120.117 156.078 118.86 155.78L118.532 155.702C117.124 155.368 115.736 155.03 114.372 154.598C111.623 153.729 109.306 152.579 107.66 150.763C106.091 149.032 104.817 146.347 104.817 141.747C104.817 134.579 108.087 130.321 112.198 127.701C116.497 124.96 121.797 124 125.317 124C128.836 124 134.136 124.96 138.435 127.701C142.546 130.321 145.817 134.579 145.817 141.747C145.817 146.347 144.542 149.032 142.973 150.763C141.327 152.579 139.01 153.729 136.261 154.598C134.897 155.03 133.509 155.368 132.102 155.702L131.773 155.78C130.516 156.078 129.185 156.393 128.011 156.764Z" fill="black" className="logoColor"/>
</svg>

          </NavLink>
        </div>
      </div>
    </div>
  );
};