import React from "react";
import styles from "@/components/NavigationBar/NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button, Loading, Dropdown, User, Text } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import CheckAuthService from "@/utils/CheckAuthService";

const NavigationBar = () => {
  const { user, isLoading } = useUser();

  // WHEN LOGOUT FROM MENU IS PRESSED
  const MenuHandler = (key) => {
    if (key === "logout") {
      window.open("/api/auth/logout", "_self");
    }
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.Leftside_Nav}>Lorem ipsum dolor sit.</div>

      <div className={styles.Rightside_Nav}>
        <Button className={styles.button} size={"sm"}>
          {isLoading ? (
            <Loading color="currentColor" type="points-opacity" size="sm" />
          ) : (
            <>
              {/* IF USER IS AUTHENTICATED ✅ */}
              {user ? (
                <Dropdown placement="bottom">
                  <Dropdown.Trigger>
                    <span>
                      {user.name}
                      <Image
                        className={styles.button_img}
                        src={"/icons/TriangleDown.svg"}
                        width={11}
                        height={11}
                        alt="triangle down icon"
                      />
                    </span>
                  </Dropdown.Trigger>
                  <Dropdown.Menu
                    onAction={MenuHandler}
                    color="default"
                    aria-label="User Actions"
                  >
                    {/* IF USER IS AUTHENTICATED USING GOOGLE  */}
                    {CheckAuthService(user.sub) === "GOOGLE" && (
                      <Dropdown.Item css={{ height: "$18", cursor: "default" }}>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          Signed in as
                        </Text>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          {user.email}
                        </Text>
                      </Dropdown.Item>
                    )}

                    {/* IF USER IS AUTHENTICATED USING LINKEDIN  */}
                    {CheckAuthService(user.sub) === "LINKEDIN" && (
                      <Dropdown.Item css={{ height: "$18", cursor: "default" }}>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          You are signed in from you
                        </Text>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          LinkedIn Account
                        </Text>
                      </Dropdown.Item>
                    )}

                    {/* IF USER IS AUTHENTICATED USING GITHUB  */}
                    {CheckAuthService(user.sub) === "GITHUB" && (
                      <Dropdown.Item css={{ height: "$18", cursor: "default" }}>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          You are signed in from your
                        </Text>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          Github Account
                        </Text>
                      </Dropdown.Item>
                    )}

                    {/* IF SOME ERRORS OCCURS, IT WILL RETURN 'DEFAULT'  */}
                    {CheckAuthService(user.sub) === "DEFAULT" && (
                      <Dropdown.Item css={{ height: "$18", cursor: "default" }}>
                        <Text css={{ d: "flex", fontWeight: 600 }}>
                          You are Signed In
                        </Text>
                      </Dropdown.Item>
                    )}

                    <Dropdown.Item
                      key="logout"
                      color="error"
                      css={{ fontWeight: 600 }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link href={"/api/auth/login"}>
                  <span>
                    Login / Sign Up
                    <Image
                      className={styles.button_img}
                      src={"/icons/SignIn.svg"}
                      width={18}
                      height={18}
                      alt="lock icon"
                    />
                  </span>
                </Link>
              )}
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;