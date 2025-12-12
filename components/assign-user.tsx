"use client"

import { useComboboxAnchor } from "@/components/ui/combobox"
import { Example } from "@/components/example"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from "@/components/ui/card"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Combobox, ComboboxChips, ComboboxChip, ComboboxChipsInput, ComboboxValue, ComboboxContent, ComboboxEmpty, ComboboxList, ComboboxItem } from "@/components/ui/combobox"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { IconPlus } from "@tabler/icons-react"
import * as React from "react"

export function AssignUser() {
    const anchor = useComboboxAnchor()

    const users = [
        "shadcn",
        "maxleiter",
        "evilrabbit",
        "pranathip",
        "jorgezreik",
        "shuding",
        "rauchg",
    ]

    return (
        <Example title="User Select" className="items-center justify-center">
            <Card className="w-full max-w-sm" size="sm">
                <CardHeader className="border-b">
                    <CardTitle className="text-sm">Assign Issue</CardTitle>
                    <CardDescription className="text-sm">
                        Select users to assign to this issue.
                    </CardDescription>
                    <CardAction>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon-xs"><IconPlus strokeWidth={2} /></Button>
                            </TooltipTrigger>
                            <TooltipContent>Add user</TooltipContent>
                        </Tooltip>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <Combobox
                        multiple
                        autoHighlight
                        items={users}
                        defaultValue={[users[0]]}
                    >
                        <ComboboxChips ref={anchor}>
                            <ComboboxValue>
                                {(values) => (
                                    <React.Fragment>
                                        {values.map((username: string) => (
                                            <ComboboxChip key={username}>
                                                <Avatar className="size-4">
                                                    <AvatarImage
                                                        src={`https://github.com/${username}.png`}
                                                        alt={username}
                                                    />
                                                    <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                {username}
                                            </ComboboxChip>
                                        ))}
                                        <ComboboxChipsInput
                                            placeholder={
                                                values.length > 0 ? undefined : "Select a item..."
                                            }
                                        />
                                    </React.Fragment>
                                )}
                            </ComboboxValue>
                        </ComboboxChips>
                        <ComboboxContent anchor={anchor}>
                            <ComboboxEmpty>No users found.</ComboboxEmpty>
                            <ComboboxList>
                                {(username) => (
                                    <ComboboxItem key={username} value={username}>
                                        <Avatar className="size-5">
                                            <AvatarImage
                                                src={`https://github.com/${username}.png`}
                                                alt={username}
                                            />
                                            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        {username}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                </CardContent>
            </Card>
        </Example>
    )
}
