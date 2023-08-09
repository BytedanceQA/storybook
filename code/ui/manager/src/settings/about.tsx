import type { FC } from 'react';
import React from 'react';
import { styled } from '@storybook/theming';
import { StorybookIcon } from '@storybook/components';
import { Button, Link } from '@storybook/components/experimental';
import { UpgradeBlock } from '../components/UpgradeBlock/UpgradeBlock';

const Header = styled.header(({ theme }) => ({
  marginBottom: 32,
  fontSize: theme.typography.size.l2,
  color: theme.base === 'light' ? theme.color.darkest : theme.color.lightest,
  fontWeight: theme.typography.weight.bold,
  alignItems: 'center',
  display: 'flex',

  '> svg': {
    height: 48,
    width: 'auto',
    marginRight: 8,
  },
}));

const Container = styled.div({
  display: `flex`,
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100% - 40px)',
  flexDirection: 'column',
  padding: 20,
});

const ButtonGroup = styled.div({
  display: `flex`,
  alignItems: 'center',
  gap: 10,
  marginBottom: 12,
});

const Footer = styled.div(({ theme }) => ({
  marginBottom: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.base === 'light' ? theme.color.dark : theme.color.lightest,
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s2,
}));

const AboutScreen: FC<{
  onNavigateToWhatsNew?: () => void;
}> = ({ onNavigateToWhatsNew }) => {
  return (
    <Container>
      <div style={{ flex: '1' }} />
      <Header>
        <StorybookIcon /> Storybook
      </Header>
      <UpgradeBlock onNavigateToWhatsNew={onNavigateToWhatsNew} />
      <div style={{ flex: '1.2' }} />
      <Footer>
        <ButtonGroup>
          <Button
            as="a"
            icon="Github"
            variant="outline"
            href="https://github.com/storybookjs/storybook"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            as="a"
            icon="Document"
            variant="outline"
            href="https://storybook.js.org/docs"
            target="_blank"
          >
            Documentation
          </Button>
        </ButtonGroup>
        <div>
          Open source software maintained by{' '}
          <Link href="https://www.chromatic.com/" target="_blank" variant="secondary" weight="bold">
            Chromatic
          </Link>{' '}
          and the{' '}
          <Link
            href="https://github.com/storybookjs/storybook/graphs/contributors"
            target="_blank"
            variant="secondary"
            weight="bold"
          >
            Storybook Community
          </Link>
        </div>
      </Footer>
    </Container>
  );
};

export { AboutScreen };
