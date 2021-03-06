import React, { Component } from 'react';
import TeamList from './TeamList';
import StudentList from './StudentList';

import App from '../App';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import allocateRandomly from './MatchingStudentAlgo/Random';
import allocateBalanced from './MatchingStudentAlgo/Balanced';
import allocateBestFit from './MatchingStudentAlgo/BestFit';
import { Grid, Dropdown, Label } from 'semantic-ui-react';

import {
  Card,
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class Allocate extends Component {
  state = {
    teams: [],
    students: [],
    requiredSkills: [],
    unit: null,
    studentsPerTeam: 3,
    dummyBool: false,
  };
  goHome = () => {
    window.location.reload();
  };
  handleStudentsChange = e => {
    this.setState(
      {
        studentsPerTeam: e.target.value,
      },
      this.setTeams
    );
  };

  chooseAlgorithm = (e, { value }) => {
    console.log(e);
    this.setState(
      {
        value,
      },
      this.setTeams
    );
  };

  setTeams = () => {
    switch (this.state.value) {
      case 'Manual':
        this.setState(
          {
            teams: [],
          },
          this.renderTeams
        );
        break;
      case 'Random':
        this.setState(
          {
            teams: allocateRandomly(
              this.state.students,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      case 'Balanced':
        this.setState(
          {
            teams: allocateBalanced(
              this.state.students,
              this.state.unit,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      case 'High achievers':
        this.setState(
          {
            teams: allocateBestFit(
              this.state.students,
              this.state.unit,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      default:
        this.setState(
          {
            teams: [],
          },
          this.renderTeams
        );
        break;
    }
  };

  renderTeams = () => {
    switch (this.state.value) {
      case 'Manual':
        return <div>manual</div>;
      case '':
        return <div></div>;
      default:
        let renderedContent = (
          <TeamList teamName="Whatever" teams={this.state.teams} />
        );
        return <div>{renderedContent}</div>;
    }
  };

  componentDidMount() {
    const { unit } = this.props.location.state;
    console.log(unit);
    console.log(this.props.location.state);
    this.setState({
      teams: unit.teams,
      students: unit.students,
      requiredSkills: unit.requiredSkills,
      unit: unit,
    });
  }

  render() {
    // <Container alignRight>
    //   <Row>
    //     <Dropdown>
    //       <Dropdown.Toggle variant="success" id="dropdown-basic">
    //         Choose Algorithm
    //       </Dropdown.Toggle>
    const selectionOptions = [
      {
        key: 'Balanced',
        text: 'Balanced',
        value: 'Balanced',
      },
      {
        key: 'High Achievers',
        text: 'High Achievers',
        value: 'High Achievers',
      },
      {
        key: 'Random',
        text: 'Random',
        value: 'Random',
      },
    ];

    const studentOptions = [
      {
        key: '2',
        text: '2',
        value: 2,
      },
      {
        key: '3',
        text: '3',
        value: 3,
      },
      {
        key: '4',
        text: '4',
        value: 4,
      },
    ];

    const { value } = this.state;

    return (
      <div>
        <BrowserRouter>
          <h1 onClick={this.goHome}>
            <Link to="/">HOME</Link>
          </h1>
          <Route path="/" Component={App} />
          {/* <Route exact path="/units/FIT2100/Allocate" Component={Allocate}  /> */}
        </BrowserRouter>
        <div>
        <Header
          inverted
          as="h1"
          textAlign="align-left"
          style={{ padding: '1em 1em', }}
        >
          <Icon inverted name="handshake outline" style={{ testAlign: 'left' }} circular />
          <Header.Content>Collaborator</Header.Content>
        </Header>
          <Header
            inverted
            as="h2"
            textAlign="align-left"
            style={{ padding: '1em 1.5em' }}
          >
            <Icon
              inverted
              name="users"
              circular
            />

            <Header.Content>
              Allocation - {this.state.code} {this.state.title}
            </Header.Content>
          </Header>
                    <Header
            inverted
            as="h2"
            textAlign="align-left"
            style={{ padding: '1em 1em' }}
          >
          <Icon
              inverted
              name="angle left"
              style={{

                padding: '1em 1em',
                            position: 'absolute',
                            left: (getWidth) ,
                            right: 0 ,
                            top: 15,
                            bottom: 0
                        }}
              circular
              onClick={this.props.history.goBack()}
            />
            </Header>
        </div>
        <Grid centered style={{ marginTop: '2rem' }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header style={{ color: 'white' }} as="h3" dividing>
                Select team-making algorithm
              </Header>
              <Dropdown
                placeholder="Select algorithm"
                fluid
                selection
                options={selectionOptions}
                onChange={this.chooseAlgorithm}
                value={value}
              ></Dropdown>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header style={{ color: 'white' }} as="h3" dividing>
                Select students per team
              </Header>
              <input
                value={this.state.studentsPerTeam}
                style={{ padding: '1rem', width: '100%' }}
                type="number"
                onChange={this.handleStudentsChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={10}>{this.renderTeams()}</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Allocate;
