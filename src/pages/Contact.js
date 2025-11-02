import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ type: "error", message: "Please fill all fields." });
      return;
    }

    try {
      setLoading(true);

      const form = new FormData();
      form.append("access_key", "7061a346-4729-4933-826a-ccdbae2e4b4f");
      form.append("subject", "New Contact Form Message");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setAlert({ type: "success", message: "Form Submitted Successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data);
        setAlert({
          type: "error",
          message:
            data.message ||
            "Submission blocked by spam filter. Try again later.",
        });
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setAlert({ type: "error", message: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #f9f9f9 50%, #e1f5fe 100%)",
        p: 3,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%", maxWidth: 520 }}
      >
        <Box
          sx={{
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.75)",
            borderRadius: "20px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.1), 0 0 20px rgba(33,150,243,0.08)",
            p: 5,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow:
                "0 12px 35px rgba(0,0,0,0.15), 0 0 35px rgba(33,150,243,0.15)",
              transform: "translateY(-3px)",
            },
          }}
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              sx={{
                background: "linear-gradient(90deg, #2196f3, #21cbf3)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
              }}
            >
              Let’s Connect 
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Have a project in mind? Drop a message below.
            </Typography>
          </motion.div>

          {/* Alert */}
          <AnimatePresence>
            {alert.message && (
              <motion.div
                key="alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Alert severity={alert.type} sx={{ mb: 2 }}>
                  {alert.message}
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            variants={containerVariants}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <motion.div variants={itemVariants}>
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  py: 1.5,
                  borderRadius: "30px",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  background:
                    "linear-gradient(90deg, #2196f3, #21cbf3, #1de9b6)",
                  backgroundSize: "200%",
                  boxShadow:
                    "0 4px 15px rgba(33,150,243,0.4), 0 0 15px rgba(33,150,243,0.3)",
                  "&:hover": {
                    backgroundPosition: "right center",
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0 8px 25px rgba(33,150,243,0.5), 0 0 25px rgba(33,150,243,0.3)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={26} sx={{ color: "#fff" }} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </motion.div>
          </motion.form>
        </Box>
      </motion.div>
    </Box>
  );
}
