import { Box, Typography } from '@mui/material';

interface LinkTextProps {
  link: string;
  onClick: () => void;
}

export const LinkText: React.FC<LinkTextProps> = ({ link, onClick }) => {
  return (
    <Box display="flex" justifyContent="end" mt={2} mb={2}>
      <Typography
        onClick={onClick}
        variant="body2"
        fontWeight="bold"
        sx={{
          '&:hover': {
            color: 'secondary.light',
          },
          cursor: 'pointer',

          transition: 'ease-in-out 200ms',
        }}
      >
        {link}
      </Typography>
    </Box>
  );
};