import React from "react";
import FormControl from "./FormControl";

const USER_DATA = [
  {
    username: "Maria",
    email: "b.maria@example.com",
  },

  {
    username: "Consuela",
    email: "22consuela@example.com",
  },

  {
    username: "Benni",
    email: "Superbenni@example.com",
  },

  {
    username: "Zina",
    email: "zina@example.com",
  },

  {
    username: "asang0",
    email: "jgovenlock0@google.ru"
  }, {
    username: "dpitman1",
    email: "lgatherer1@msu.edu"
  }, {
    username: "mludron2",
    email: "cgulleford2@goo.ne.jp"
  }, {
    username: "kgoncaves3",
    email: "kcawdell3@geocities.com"
  }, {
    username: "enoke4",
    email: "rgaskins4@qq.com"
  }, {
    username: "dpersicke5",
    email: "tlowles5@weebly.com"
  }, {
    username: "labrahamsohn6",
    email: "frecher6@quantcast.com"
  }, {
    username: "bwathey7",
    email: "ltribe7@timesonline.co.uk"
  }, {
    username: "tgammack8",
    email: "dgerald8@mayoclinic.com"
  }, {
    username: "athorrington9",
    email: "ntriplow9@nydailynews.com"
  }, {
    username: "apenlingtona",
    email: "dshillittoa@github.com"
  }, {
    username: "ireiglarb",
    email: "cmustinb@whitehouse.gov"
  }, {
    username: "gmorefieldc",
    email: "clossmanc@umn.edu"
  }, {
    username: "hyesenevd",
    email: "bdodd@google.com.hk"
  }, {
    username: "aewine",
    email: "mrobeze@google.ca"
  }, {
    username: "ebownf",
    email: "ocornelissef@taobao.com"
  }, {
    username: "tmansbridgeg",
    email: "dkleeg@mapquest.com"
  }, {
    username: "ckarlsenh",
    email: "tcordeiroh@goo.ne.jp"
  }, {
    username: "ameleski",
    email: "jcramei@bandcamp.com"
  }, {
    username: "dscottsj",
    email: "afreynj@toplist.cz"
  }, {
    username: "mbolamk",
    email: "odagwellk@nifty.com"
  }, {
    username: "bbahial",
    email: "alaughlinl@skype.com"
  }, {
    username: "eoxladem",
    email: "wantrimm@whitehouse.gov"
  }, {
    username: "nsuddockn",
    email: "pmaciejakn@rakuten.co.jp"
  }, {
    username: "wbuzzingo",
    email: "hpadmoreo@tmall.com"
  }, {
    username: "tdrakesp",
    email: "cjarnellp@privacy.gov.au"
  }, {
    username: "ecuretonq",
    email: "mhebburnq@dell.com"
  }, {
    username: "dphetter",
    email: "gryottr@clickbank.net"
  }, {
    username: "bzeals",
    email: "nheinzs@is.gd"
  }, {
    username: "cscholert",
    email: "pmurneyt@scribd.com"
  }, {
    username: "djosowitzu",
    email: "escutchingsu@wp.com"
  }, {
    username: "jtenantv",
    email: "jdorlingv@stumbleupon.com"
  }, {
    username: "phackfordw",
    email: "bdowerw@msu.edu"
  }, {
    username: "bnuttonx",
    email: "fstillgoex@bravesites.com"
  }, {
    username: "jjaegary",
    email: "bpentonyy@icq.com"
  }, {
    username: "tabisettiz",
    email: "tbenzingz@va.gov"
  }, {
    username: "jbenning10",
    email: "lyurchenko10@mayoclinic.com"
  }, {
    username: "hsackes11",
    email: "spiccard11@state.gov"
  }, {
    username: "tcanfield12",
    email: "frodden12@wsj.com"
  }, {
    username: "rbehagg13",
    email: "mpealing13@jiathis.com"
  }, {
    username: "vburley14",
    email: "scubuzzi14@usgs.gov"
  }, {
    username: "flocke15",
    email: "thillam15@nature.com"
  }, {
    username: "lpoolton16",
    email: "ugaffney16@cpanel.net"
  }, {
    username: "hfenix17",
    email: "jbrandoni17@economist.com"
  }, {
    username: "aknellen18",
    email: "caspinal18@china.com.cn"
  }, {
    username: "fhurd19",
    email: "bmaccauley19@wix.com"
  }, {
    username: "atough1a",
    email: "lklimas1a@columbia.edu"
  }, {
    username: "mdiable1b",
    email: "dsumpton1b@addthis.com"
  }, {
    username: "amolloy1c",
    email: "mstudeart1c@forbes.com"
  }, {
    username: "ewhieldon1d",
    email: "djorat1d@unc.edu"
  }, {
    username: "eespinha1e",
    email: "nstobart1e@tinypic.com"
  }, {
    username: "hstringman1f",
    email: "rfitzpatrick1f@unesco.org"
  }, {
    username: "kdelacoste1g",
    email: "ysnare1g@timesonline.co.uk"
  }, {
    username: "ykeeffe1h",
    email: "ssoutherden1h@foxnews.com"
  }, {
    username: "tgerren1i",
    email: "nruxton1i@samsung.com"
  }, {
    username: "hwrettum1j",
    email: "lhorsefield1j@cnbc.com"
  }, {
    username: "zsmorfit1k",
    email: "lbairstow1k@bloglines.com"
  }, {
    username: "mcasotti1l",
    email: "sschaumaker1l@e-recht24.de"
  }, {
    username: "chamlen1m",
    email: "ebartram1m@typepad.com"
  }, {
    username: "ncowherd1n",
    email: "wbernardin1n@flavors.me"
  }, {
    username: "ljacomb1o",
    email: "mmechan1o@wikispaces.com"
  }, {
    username: "rcubitt1p",
    email: "nkelso1p@yellowbook.com"
  }, {
    username: "ksilveston1q",
    email: "mlothlorien1q@youtu.be"
  }, {
    username: "rfarmiloe1r",
    email: "ewetherick1r@altervista.org"
  }, {
    username: "mcandie1s",
    email: "tspreull1s@nih.gov"
  }, {
    username: "trump1t",
    email: "edunphie1t@unblog.fr"
  }, {
    username: "jalford1u",
    email: "khaacker1u@walmart.com"
  }, {
    username: "agulliver1v",
    email: "vcoghlin1v@jiathis.com"
  }, {
    username: "gslyne1w",
    email: "dfursland1w@illinois.edu"
  }, {
    username: "dshillito1x",
    email: "gattestone1x@slashdot.org"
  }, {
    username: "rmcgeoch1y",
    email: "bspry1y@google.it"
  }, {
    username: "lwheildon1z",
    email: "rridgers1z@google.ru"
  }, {
    username: "iteasell20",
    email: "gkulver20@bing.com"
  }, {
    username: "ggeorger21",
    email: "ltenny21@altervista.org"
  }, {
    username: "gbristoe22",
    email: "jholbie22@time.com"
  }, {
    username: "bbellward23",
    email: "horpen23@nsw.gov.au"
  }, {
    username: "tiori24",
    email: "pmaxweell24@joomla.org"
  }, {
    username: "rhartburn25",
    email: "jbouzan25@cyberchimps.com"
  }, {
    username: "flowater26",
    email: "awinter26@nba.com"
  }, {
    username: "ndenholm27",
    email: "ptokell27@nps.gov"
  }, {
    username: "cparell28",
    email: "jkmiec28@merriam-webster.com"
  }, {
    username: "jfilipovic29",
    email: "dalgar29@cloudflare.com"
  }, {
    username: "wpostlewhite2a",
    email: "jstuart2a@cnn.com"
  }, {
    username: "spearce2b",
    email: "lgarretts2b@ifeng.com"
  }, {
    username: "dgrandisson2c",
    email: "cgreenley2c@domainmarket.com"
  }, {
    username: "emckirdy2d",
    email: "goxbrough2d@salon.com"
  }, {
    username: "cgeldard2e",
    email: "aballinghall2e@free.fr"
  }, {
    username: "mmineghelli2f",
    email: "gdudden2f@ask.com"
  }, {
    username: "brussen2g",
    email: "gmarre2g@ovh.net"
  }, {
    username: "lpatkin2h",
    email: "bgallop2h@hexun.com"
  }, {
    username: "pdiruggiero2i",
    email: "ddmtrovic2i@feedburner.com"
  }, {
    username: "moloughane2j",
    email: "lhutcheson2j@buzzfeed.com"
  }, {
    username: "morcott2k",
    email: "spetrulis2k@seattletimes.com"
  }, {
    username: "lmcrinn2l",
    email: "ksexstone2l@mashable.com"
  }, {
    username: "rbeggi2m",
    email: "bfeehan2m@usnews.com"
  }, {
    username: "mrosso2n",
    email: "agovett2n@technorati.com"
  }, {
    username: "thruska2o",
    email: "hshobbrook2o@nasa.gov"
  }, {
    username: "hmuglestone2p",
    email: "asteenson2p@wordpress.org"
  }, {
    username: "sgerrard2q",
    email: "llomas2q@artisteer.com"
  }, {
    username: "lredihalgh2r",
    email: "ktitterrell2r@upenn.edu"
  }
]

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USER_DATA,
      column: '',
      direction: 'asc',
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  sortByUsername = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;
    if (this.state.column === 'username') {
      direction = direction === 'asc' ? 'desc' : 'asc';
    }
    sortedArray.sort((a, b) => {
      if (direction === 'asc') {
        //asc sort
        return a.username > b.username ? 1 : a.username < b.username ? -1 : 0;
      } else {
        //desc sort
        return a.username > b.username ? -1 : a.username < b.username ? 1 : 0;
      }
    });
    this.setState({
      ...this.state,
      users: sortedArray,
      column: 'username',
      direction: direction,
    });
  }

  sortByEmail = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;

    if (this.state.column === 'email') {
      direction = direction === 'asc' ? 'desc' : 'asc';
    }

    sortedArray.sort((a, b) => {
      if (direction === 'asc') {
        //asc sort
        return a.email > b.email ? 1 : a.email < b.email ? -1 : 0;
      } else {
        //desc sort
        return a.email > b.email ? -1 : a.email < b.email ? 1 : 0;
      }
    });

    this.setState({
      ...this.state,
      users: sortedArray,
      column: 'email',
      direction: direction,
    });
  }

  handleChange(event) {
    const query = event.target.value

    const users = USER_DATA.filter((user) => user.email.includes(query) || user.username.includes(query))

    this.setState({
      ...this.state,
      users,
      query
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-control">
          <FormControl id="filter" label="Filter: " type="text" name="filter" onChange={this.handleChange} value={this.props.query} />
        </div>
        <table className="table table-dark">
          <thead>
            <tr className="table-dark">
              <th>#</th>
              <th><button className="btn btn-danger" onClick={this.sortByUsername}>
                <span>Username</span>
                {this.state.column === 'username' &&
                  <span className={[
                    "fas",
                    this.state.direction === 'asc' ? 'fa-angle-up' : 'fa-angle-down'
                  ].join(' ')}></span>
                }
              </button></th>
              <th><button className="btn btn-warning" onClick={this.sortByEmail}>
                <span>Email</span>
                {this.state.column === 'email' &&
                  <span className={[
                    "fas",
                    this.state.direction === 'asc' ? 'fa-angle-up' : 'fa-angle-down'
                  ].join(' ')}></span>
                }
              </button></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return (
                <tr key={user.email}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
            <tr></tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th colSpan="3">there {this.state.users.length > 1 ? "are" : "is"} {this.state.users.length} {this.state.users.length > 1 ? "results" : "result"}</th>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    )
  }
}





export default UserList;