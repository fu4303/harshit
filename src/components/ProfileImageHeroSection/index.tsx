import * as React from 'react';
import ProfilePic from '@components/Images/ProfilePic';
import * as L from './styles';

const ProfileImageHeroSection: React.FC = () => {
  return (
    <>
      <L.Section>
        <L.ImageSection>
          <ProfilePic />
          <L.DSvg />
        </L.ImageSection>
        <L.TextSection>
          <div>
            <L.YellowH6>Hi, I{"'"}m</L.YellowH6>
          </div>
          <div>
            <L.HeroH1>Harshit Pant.</L.HeroH1>
          </div>
          <div>
            <L.HeroText>
              I am a software engineer from the Himalayas.
            </L.HeroText>
          </div>
          <div>
            <L.Button as="a" href="#contact">
              Say Hi!{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </L.Button>
          </div>
        </L.TextSection>
      </L.Section>
      <L.Bezier></L.Bezier>
    </>
  );
};

export default ProfileImageHeroSection;
